import React from 'react';
import Loader from '../Loader/Loader';
import Api from '../../api';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticating: false
        };

        this.onSubmit()
    }

    login() {
        event.preventDefault();
        this.setState({isAuthenticating: true});

        api.login(data)
            .then(json => {
                this.setState({isAuthenticating: false})
            })
    }

    render() {
        return (
            <div className="form-panel">
                <form action="...">
                    {/* Input fields */}
                    <div className="form-panel-row">
                        <label className="title-label" htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Type your username"/>
                    </div>
                    <div className="form-panel-row">
                        <label className="title-label" htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Type your password"/>
                    </div>
                    <hr/>
                    <button
                        type="submit"
                        className="button alert"
                        onClick={login}
                        data-testid="bidderSubmitButton"
                    >
                        {isAuthenticating ? <Loader /> : 'Login'}
                    </button>
                </form>
            </div>
        )
    }

}
export default Login;
