import React, { useState } from 'react'

const SECURITY_CODE = 'Hola123'

function UseState() {
    //states
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [ckeck, setCkeck] = useState(false)
    const [deleted, setdeleted] = useState(false)
    const [confirmed, setConfirmed] = useState(false)
    //------------------------------------------------------------------------------
    React.useEffect(() => {
        console.log("empezando efecto")
        if (loading) {
            setError(false)
            setTimeout(() => {
                console.log("haciendo validacion")
                setLoading(false)
                if (value === SECURITY_CODE) {
                    setCkeck(true)
                    setConfirmed(true)
                } else {
                    setError(true)
                }
                console.log("terminando validacion")
            }, 3000)
        }
        console.log("terminando efecto")
    }, [loading])
    if (!deleted && !confirmed) {
        return (
            <div>
                <h2>Eliminar UseState</h2>
                <p>Por favor, escribe el codigo de seguridad</p>
                {error ? <p>Hay un error</p> : <p></p>}
                {loading && (
                    <p>Cargando...</p>
                )}
                {
                    ckeck ? <h4>Clave correcta</h4> : <h4></h4>
                }

                <input type="text" placeholder="codigo de seguridad"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    name="" id="" />
                <button
                    onClick={() => {
                        // setError(false)
                        setLoading(true)
                    }}>Comprobar</button>
            </div>
        )
    } else if (confirmed && !deleted) {
        return (
            <>
                <p>
                    ¿Desea eliminar?
                </p>
                <button
                    onClick={() => {
                        setdeleted(true)
                        setValue('')
                    }}
                >Si, eliminar</button>
                <button
                    onClick={() => {
                        setConfirmed(false)
                        setValue('')
                    }}
                >No</button>
            </>
        )
    } else {
        return (<>
            <h2>Eliminado con exito</h2>
            <button
                onClick={() => {
                    setConfirmed(false)
                    setdeleted(false)
                }}
            >Regresar a useState</button>
        </>)
    }
}

export default UseState