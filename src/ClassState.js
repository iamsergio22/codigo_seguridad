import React from "react";
import Loading from "./Loading";

const SECURITY_CODE = 'Hola123'

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loading: false,
            value: '',
            Ckeck: false
        }
    }

    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                console.log("haciendo validacion")
                if (this.state.loading) {
                    setTimeout(() => {
                        console.log("haciendo validacion")
                        this.setState({ loading: false })
                        if (this.state.value === SECURITY_CODE) {
                            this.setState({ loading: false, error: false, Ckeck: true })
                        } else {
                            this.setState({ error: true })
                        }
                        console.log("terminando validacion")
                    }, 3000)
                }
                console.log("terminando validacion")
            }, 3000)
        }
    }
    render() {
        const { error, loading, value, Ckeck } = this.state;

        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor, escribe el codigo de seguridad</p>
                {(error && !loading) ? <p>Hay un error</p> : <p></p>}
                {loading && (<Loading />)}
                {Ckeck ? <h4>Correcto</h4> : <h4></h4>}
                <input type="text" placeholder="codigo de seguridad"
                    onChange={(e) => {
                        this.setState({ value: e.target.value })
                    }}
                    name="" id="" />
                <button onClick={() => {
                    this.setState({ loading: true })
                }}>Comprobar</button>
            </div>
        )
    }
}

export default ClassState 