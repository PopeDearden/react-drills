import React, {Component} from 'react'

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.alertLogin = this.alertLogin.bind(this)
    }
    changeUsername(name) {
        this.setState({ username: name })
    }

    changePassword(pass) {
        this.setState({ password: pass })
    }
    alertLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render() {
        return (
            <div>
            <input onChange={evil => this.changeUsername(evil.target.value)} type='text' />
            <input onChange={evil => this.changePassword(evil.target.value)} type='text' />
            <button onClick={this.alertLogin}>Login</button>
            </div>
        )
}
}