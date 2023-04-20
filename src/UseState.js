import React, { useState } from 'react'

function UseState() {
    //states
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    //------------------
    React.useEffect(() => {
        console.log("empezando efecto")
        if (loading) {
            setTimeout(() => {
                console.log("haciendo validacion")
                setLoading(false)
                console.log("terminando validacion")
            })
        }
        console.log("terminando efecto")
    }, [loading])
    return (
        <div>
            <h2>Eliminar UseState</h2>
            <p>Por favor, escribe el codigo de seguridad</p>
            {error ? <p>Hay un error</p> : <p></p>}
            {loading && (
                <p>Cargando...</p>
            )}
            <input type="text" placeholder="codigo de seguridad" name="" id="" />
            <button
                onClick={() => {
                    setError(true)
                }}>Comprobar</button>
        </div>
    )
}

export default UseState