import React, { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [colorNav, setColorNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 50) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  }

  const menuHandler = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    changeColor();
    window.addEventListener('scroll', changeColor);
  })

  const navColor = colorNav ? "bg-background" : "bg-dark";
  const showContacto = menuOpen ? "contacto-hidden" : "contacto";

  return (
    <Fragment>
      <header id='headerVass' role='banner'>
        <div className={navColor}>
          <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar">
            <div className="container-fluid vs-desktop-nav">
              <img alt="VASS" data-src="https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png"
                className="logo-home-d lazyloaded" src="https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png"></img>
              <button onClick={menuHandler} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <div className="navbar-nav">
                  <a href="#" className="nav-item nav-link active">Casos de éxito</a>
                  <a href="#" className="nav-item nav-link active">Mercados</a>
                  <a href="#" className="nav-item nav-link active">Países</a>
                  <a href="#" className="nav-item nav-link active" >Somos VASS</a>
                  <a href="#" className="nav-item nav-link active">Cómo lo hacemos</a>
                  <a href="#" className="nav-item nav-link active">Insights</a>
                  <a href="#" className="nav-item nav-link active">Messages</a>
                  <a href="#" className="nav-item nav-link active">Noticias</a>
                  <a href="#" className="nav-item nav-link active">VASS Research</a>
                  <a href="#" className="nav-item nav-link active">EN</a>
                  <a href="#" className="nav-item nav-link active"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                  <a href="#" className="nav-item nav-link active">Talento</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className={showContacto}>
          <h3>CONTACTO</h3>
        </div>
      </header>
    </Fragment>
  )
}

export default Navbar