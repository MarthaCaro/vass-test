import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        fullName: "",
        Email: "",
        Empresa: "",
        Mensaje: ""
    });

    const [err, setErr] = useState();
    const [show, setShow] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(true)
        if (user.fullName.length === 0 || user.Email.length === 0 || user.Empresa.length === 0 ||
            user.Mensaje.length === 0) {
            setErr(true)
        } else {
            setErr(false)
        }
    }

    let mensaje;
    if (err) {
        mensaje = 'Uno o más campos tienen un error. Por favor revísalos e inténtalo de nuevo';
    }


    return (
        <div className='form'>
            <form className="row g-3 p-5" onSubmit={handleSubmit}>
                <div className="col-xl-4 p-4">
                    <div className="form-outline p-4">
                        <label className="form-label">Nombres y apellidos</label>
                        <input required type="text" className="form-control inputForm"
                            value={user.fullName}
                            onChange={(event) => setUser({ ...user, fullName: event.target.value })} />
                    </div>
                    <div className="form-outline p-4">
                        <label className="form-label" >Email</label>
                        <input required type="text" className="form-control inputForm"
                            value={user.Email}
                            onChange={(event) => setUser({ ...user, Email: event.target.value })} />
                    </div>
                    <div className="form-outline p-4">
                        <label className="form-label" >Empresa/Organismo</label>
                        <input required type="text" className="form-control inputForm"
                            value={user.Empresa}
                            onChange={(event) => setUser({ ...user, Empresa: event.target.value })} />
                    </div>
                    <div className="form-outline p-4">
                        <label className="form-label" >País</label>
                        <input type="text" className="form-control inputForm" />
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="form-outline p-4">
                        <label className="form-label" >Teléfono</label>
                        <input type="text" id="form10Example2" className="form-control inputForm" />
                    </div>
                    <div className="form-outline p-4">
                        <label className="form-label">Mensaje:</label>
                        <textarea required className='form-control mensaje' rows="5"
                            value={user.Mensaje}
                            onChange={(event) => setUser({ ...user, Mensaje: event.target.value })} />
                    </div>
                    <div className="form-outline p-4 anuncio4">
                        <button type="submit" className="btn btn-primary p-4 button">Enviar</button>
                    </div>
                </div>
            </form>
            <div className="col-xl-4">
                <div className="form-outline p-4 mensajeError">
                    {show && <p>{mensaje}</p>}
                </div>
            </div>
        </div>
    )
}

export default Form;