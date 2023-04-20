import React from "react";

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }
    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor, escribe el codigo de seguridad</p>
                {this.state.error ? <p>Hay un error</p> : <p></p>}

                <input type="text" placeholder="codigo de seguridad" name="" id="" />
                <button onClick={() => {
                    this.setState({error: !this.state.error})
                }}>Comprobar</button>
            </div>
        )
    }
}

export default ClassState 