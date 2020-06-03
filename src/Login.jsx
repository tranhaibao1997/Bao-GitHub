import React, { Component } from 'react';
import PropTypes from 'prop-types';


const clientId = "4c72bea4dbe62c9a14d5";


class Login extends Component {
    constructor(props) {
        super(props);
        const existingToken = sessionStorage.getItem('token');
        const accessToken = (window.location.search.split("=")[0] === "?access_token") ? window.location.search.split("=")[1] : null;

        if (!accessToken && !existingToken) {
            window.location.replace(`https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`)
        }

        if (accessToken) {

            console.log(`New accessToken: ${accessToken}`);

            sessionStorage.setItem("token", accessToken);
            this.props.setToken(accessToken)
        }

        if (existingToken) {
           this.props.setToken(existingToken)
        }
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;