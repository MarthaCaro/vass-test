import React, { Fragment } from 'react'
import imagen from "../../assets/img/imagener.png"
import Row from 'react-bootstrap/Row';
import instagram from "../../assets/img/ico-instagram.png"

const Footer = () => {
    return (
        <Fragment>
            <div className='containerFooter'>
                <Row className='p-5'>
                    <div className='col-12 col-md-1 col-xl-1 anuncio4'>
                        <p>Complex made simple</p>
                    </div>
                    <div className='col-md-1 col-xl-1 anuncio4'>
                    </div>
                    <div className='col-6 col-md-4 col-xl-4 anuncio3'>
                        <p>Sitemap VASS</p>
                        <div>
                            <ul className='ListaFooter'>
                                <li>Home</li>
                                <li>Casos éxito</li>
                                <li>Somos VASS</li>
                                <li>Impactos</li>
                                <li>Método</li>
                                <li>Tecnollogías</li>
                                <li>Proyectos I+D+i</li>
                                <li>Insigghts</li>
                                <li>Noticias</li>
                                <li>VASS Research</li>
                                <li>Canal de denuncias</li>
                                <li>Contacto</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-6 col-md-4 col-xl-4 anuncio3'>
                        <p>Sitemap Talento</p>
                        <div>
                            <ul className='ListaFooter'>
                                <li>Talento</li>
                                <li>#LifeVASS</li>
                                <li>Beneficios</li>
                                <li>Planes para ti</li>
                                <li>Proyectos</li>
                                <li>Smartworking</li>
                                <li>Ofertas</li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-6 col-md-1 col-xl-1 anuncio3'>
                        <p>Empresas</p>
                        <div>
                            <ul className='ListaFooter'>
                                <li>VASS</li>
                                <li>Nateevo</li>
                                <li>Serbatic</li>
                                <li>vdSHOP</li>
                            </ul>
                        </div>
                    </div>
                </Row>
                <Row className='p-5 footer-content'>
                    <div className='col-8 col-xl-6 anuncio3'>
                        <img alt="VASS" data-src="https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png"
                            className="logo-home-d lazyloaded" src="https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png"></img>
                    </div>
                    <div className='col-4 col-xl-6 anuncio4 imagenER'>
                        <img src={imagen} />
                    </div>
                </Row>
            </div>
            <div className='containerFooter2'>
                <Row className='p-5'>
                    <div className='col-12 col-xl-4'>
                        <p>Copyright © 2023 Todos los derechos reservados</p>
                    </div>
                    <div className='col-12  col-xl-5 '>
                        <ul className='ListaFooter2'>
                            <li>Memoria ambiental</li>
                            <li>Política de cookies</li>
                            <li>Política de privacidad</li>
                            <li>Política de calidad y medio ambiente</li>
                        </ul>
                    </div>
                    <div className='col-12  col-xl-3 anuncio4 iconos'>
                        <img src={instagram} />
                        <img src={instagram} />
                        <img src={instagram} />
                        <img src={instagram} />
                    </div>
                </Row>
            </div>
        </Fragment>
    )
}

export default Footer;