import React from 'react';
import AuthUtils from '../../utils/AuthUtils';
import './LoginPage.css';

export default class LoginPage extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (event) => {
        const {name, value} = event.currentTarget;

        this.setState({[name]: value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {username, password} = this.state;

        const user = await AuthUtils.login(username, password);

        // success
        if (user) {
            // set state
            localStorage.setItem('user', JSON.stringify(user));

            console.log(user);

            // redirect
            window.location.replace("/");
        } else {
            alert('Invalid credentials!');
        }

    }

    render() {
        return <>
            <div id="login-page">
                <div class="container">
                <form class="form-login">
                    <h2 class="form-login-heading">sign in now</h2>
                    <div class="login-wrap">
                        <input type="text" class="form-control" placeholder="Username" autofocus="" 
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <br/>

                        <input type="password" class="form-control" placeholder="Password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <label class="checkbox">
                            <span class="pull-right">
                            <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
                            </span>
                        </label>
                        <button class="btn btn-theme btn-block" type="submit" onClick={this.handleSubmit}>
                            <i class="fa fa-lock"></i> SIGN IN
                        </button>
                        
                        <hr/>
                    
                        <div class="registration">
                            Don't have an account yet?<br/>
                            <a class="" href="#">
                            Create an account
                            </a>
                        </div>
                    </div>
                </form>
                </div>
            </div>

            <div class="backstretch">
                <img src="img/login-bg.jpg" alt="" />
            </div>
        </>;
    }
}