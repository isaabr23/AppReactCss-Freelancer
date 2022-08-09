import React from 'react'
import { AppRouter } from './Router/AppRouter'
import './styles.css'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CreateIcon from '@mui/icons-material/Create';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

export const FreelancerApp = () => {
  return (
    <>
      <header>
        <h1 className="titulo">Isaak Campos <span>(Freelancer)</span></h1>
      </header>
      <AppRouter />  

      <div className="imagen">
        <div className="contenedor-imagen">
            <h1>Diseño y Desarrollo Freelancer</h1>
            <p><AddLocationOutlinedIcon sx={{ fontSize: 70, color: '#FFC107' }}/>Mexico, CDMX</p>
            <button className="boton" href="#">Contactar</button>
        </div>
      </div>

      <div className='contenedor'>
      <main className="servicios">
        <h2>Nuestros Servicios</h2>
        <div className="contenedor-servicios">
            <div className="servicio">
                <h3>Diseño Web</h3>
                <div className="iconos">
                    <CreateIcon sx={{ fontSize: 30}}/>
                </div>
                <p>Eveniet eaque reprehenderit animi debitis fugiat impedit id est omnis delectus, ipsam, laudantium incidunt odio officia. Quam accusamus praesentium pariatur modi ipsum!</p>
            </div>
            <div className="servicio">
                <h3>Aplicaciones Moviles</h3>
                <div className="iconos">
                    <AndroidIcon sx={{ fontSize: 30}}/>
                    <AppleIcon sx={{ fontSize: 30}}/>
                </div>
                <p>9Eveniet eaque reprehenderit animi debitis fugiat impedit id est omnis delectus, ipsam, laudantium incidunt odio officia. Quam accusamus praesentium pariatur modi ipsum!</p>
            </div>
            <div className="servicio">
                <h3>Social Media</h3>
                <div className="iconos">
                    <FacebookIcon sx={{ fontSize: 30}}/>
                    <TwitterIcon sx={{ fontSize: 30}}/>
                </div>
                <p>Eveniet eaque reprehenderit animi debitis fugiat impedit id est omnis delectus, ipsam, laudantium incidunt odio officia. Quam accusamus praesentium pariatur modi ipsum!</p>
            </div>
        </div>
      </main>

        <section id="contacto" className="contacto">
            <h2>Contacto</h2>
            <form action="#">
                <legend>Contactanos llenando todos los campos</legend>
                <div className="contenedor-campos">
                    <div className="campo">
                        <label>Nombre:</label>
                        <input type="text" name="nombre" placeholder="Nombre"/>
                    </div>
                    <div className="campo">
                        <label>Telefono:</label>
                        <input type="tel " name="nombre" placeholder="Telefono"/>
                    </div>
                    <div className="campo w-100">
                        <label>Correo:</label>
                        <input type="mail" name="nombre" placeholder="Correo"/>
                    </div>
                    <div className="campo w-100">
                        <label>Mensaje:</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className="enviar derecha">
                    <input type="submit" className="boton w-100"/>
                </div>
            </form>
        </section>
      </div>
    </>
  )
}

