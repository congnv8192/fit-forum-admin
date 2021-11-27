import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/FormInput";
import UserUtils from "../../utils/UserUtils";

export default class UserAddPage extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            username: '',
            passwor: '',
            displayName: '',
            avatar: ''
        };
    }

    handleChange = (event) => {
        // const input = event.currentTarget;
        // const name = input.name; // username
        // const value = input.value;

        const { name, value } = event.currentTarget;
        
        this.setState({ [name] : value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const user = await UserUtils.add(this.state);

        if (user) {
            alert("Added successfully!");

            window.location.replace("/users");
        } else {
            alert("Invalid data! Please try again later.");
        }
    }

    render() {
        return <>
            <h3><i className="fa fa-angle-right"></i> Add new user</h3>
            <div className="text-right">
                <Link to="/users" className="btn btn-primary">
                    <i className="fa fa-reply"></i> All users
                </Link>
            </div>
            <div className="row mt">
                <div className="form-panel">
                <h4 className="mb"><i className="fa fa-angle-right"></i> User details</h4>

                <form 
                    className="form-horizontal style-form" 
                    onSubmit={ this.handleSubmit }
                >
                    
                    <FormInput 
                        label="Username"
                        name="username"
                        value={ this.state.username } 
                        onChange= { this.handleChange }
                    />
                     <FormInput 
                        type="password"
                        label="Password"
                        name="password"
                        value={ this.state.password } 
                        onChange= { this.handleChange }
                    />

                    <FormInput 
                        label="Display name"
                        name="displayName"
                        value={ this.state.displayName } 
                        onChange= { this.handleChange }
                    />

                    <FormInput 
                        label="Avatar link"
                        name="avatar"
                        value={ this.state.avatar } 
                        onChange= { this.handleChange }
                    />
                    
                    <div className="text-right">
                        <button type="submit" className="btn btn-theme">
                            <i className="fa fa-save" /> Save
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </>;
    }
}