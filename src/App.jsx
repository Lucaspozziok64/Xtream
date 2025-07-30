import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Contacto from "./components/pages/Contacto";
import Login from "./components/pages/Login";
import DetallePelicula from "./components/pages/DetallePelicula";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import AcercaDeNosotros from "./components/pages/AcercaDeNosotros";
import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/ProtectorAdmin";
import FormularioPelicula from "./components/pages/FormularioPelicula";
import { v4 as uuidv4 } from "uuid";

function App() {
  const userLogueado = sessionStorage.getItem("userKey") || false;
  const [adminUser, setAdminUser] = useState(userLogueado);
  const peliculasLocalstorage = JSON.parse(localStorage.getItem('carteleraPeliculas')) || []
  const [peliculas, setPeliculas] = useState(peliculasLocalstorage)
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  
    useEffect(()=>{
    localStorage.setItem('carteleraPeliculas', JSON.stringify(peliculas))
  }, [peliculas])

  const crearPeliculas = (peliculaNueva) => {
    peliculaNueva.id = uuidv4()
    peliculaNueva.destacada = false;

    setPeliculas([...peliculas,peliculaNueva])
    return true
  }

  const buscarPelicula = (idPelicula) => {
    const peliculaBuscada = peliculas.find((itemPelicula)=> itemPelicula.id==idPelicula)
    return peliculaBuscada
  }

  const borrarPelicula = (idPelicula) => {
    const peliculasFiltradas = peliculas.filter((itemPelicula)=>itemPelicula.id!==idPelicula)
    setPeliculas(peliculasFiltradas)
    return true
  }

  const destacarPelicula = (idPelicula) => {
  const peliculaDestacada = peliculas.map((itemPelicula) => {
    if (itemPelicula.id === idPelicula) {
      return { ...itemPelicula, destacada: true };
    } else {
      return { ...itemPelicula, destacada: false };
    }
  });
  setPeliculas(peliculaDestacada);
};
  const editarPelicula = (idPelicula, peliculaActualizado) => {
    const peliculasEditadas = peliculas.map((itemPelicula)=>{
      if(itemPelicula.id==idPelicula){
        return {
          ...itemPelicula, 
          ...peliculaActualizado
        }
      }else{
        return itemPelicula
      }
    })
    setPeliculas(peliculasEditadas)
    return true
  }

  return (
    <>
      <BrowserRouter>
        <Menu adminUser={adminUser} setAdminUser={setAdminUser} setTerminoBusqueda={setTerminoBusqueda} terminoBusqueda={terminoBusqueda}></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio peliculas={peliculas} terminoBusqueda={terminoBusqueda}></Inicio>}></Route>
            <Route
              path="/login"
              element={<Login setAdminUser={setAdminUser}></Login>}
            ></Route>
            <Route
              path="/detalle/:id"
              element={<DetallePelicula buscarPelicula={buscarPelicula}></DetallePelicula>}
            ></Route>
            <Route path="/contacto" element={<Contacto></Contacto>}></Route>
            <Route
              path="/acercadenosotros"
              element={<AcercaDeNosotros></AcercaDeNosotros>}
            ></Route>
            <Route
              path="/administrador"
              element={<ProtectorAdmin adminUser={adminUser}></ProtectorAdmin>}
            >
              <Route index element={<Administrador peliculas={peliculas} setPeliculas={setPeliculas} borrarPelicula={borrarPelicula} destacarPelicula={destacarPelicula}></Administrador>}></Route>

              <Route
                path="crear"
                element={<FormularioPelicula titulo={'Añadir película/serie'} crearPeliculas={crearPeliculas}></FormularioPelicula>}
              ></Route>
              <Route
                path="editar/:id"
                element={<FormularioPelicula titulo={'Editar película/serie'} buscarPelicula={buscarPelicula} editarPelicula={editarPelicula}></FormularioPelicula>}
              ></Route>
            </Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
