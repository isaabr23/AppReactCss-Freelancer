import { Link } from "react-router-dom";

export const AppRouter = () => {

  return (
        <div className='nav-bg'>
          <Link to="/inicio" className='nav'>Inicio</Link>
          <Link to="/nosotros" className='nav'>Nosotros</Link>
          <Link to="/proyecto" className='nav'>Proyectos</Link>
          <Link to="/contacto" className='nav'>Contacto</Link>
      </div>
  )
}
