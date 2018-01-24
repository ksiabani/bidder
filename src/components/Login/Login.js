import React from 'react';
import Loader from '../Loader/Loader';

const Login = ({onSubmit, isAuthenticating}) => (
    <div className="form-panel">
        <form action="...">
            {/* Input fields */}
            <div className="form-panel-row">
                <label className="title-label" htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Type your username" />
            </div>
            <div className="form-panel-row">
                <label className="title-label" htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Type your password" />
            </div>
            <hr/>
            <button
                type="submit"
                className="button alert"
                onClick={onSubmit}
                data-testid="bidderSubmitButton"
            >
                {isAuthenticating ? <Loader /> : 'Login'}
            </button>
        </form>
    </div>
);

export default Login;
