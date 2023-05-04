import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';

const Home = () => {
  return (
    <Fragment>
      <Row className='m-2 p-5'>
        <div className='col-md-3 col-xl-2 anuncio1'>
          <p>EMPECEMOS A HACERLO SENCILLO</p>
        </div>
        <div className='col-md-9 col-xl-10 anuncio2'>
          <p>Nos emociona impulsar tu transformación digital</p>
        </div>
      </Row>
    </Fragment>
  )
}

export default Home;