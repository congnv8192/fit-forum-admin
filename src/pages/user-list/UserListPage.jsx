import React from "react";
import { Link } from "react-router-dom";
import UserUtils from "../../utils/UserUtils";
import './UserListPage.css';

export default class UserListPage extends React.Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const users = await UserUtils.getAll();
        
        this.setState({ users });
    }

    deleteUser = async (_id) => {
        const success = await UserUtils.delete(_id);

        if (success) {
            alert("Deleted successfully!");
            let { users } = this.state;
            users = users.filter(user => user._id !== _id);

            this.setState({ users });
        } else {
            alert("Invalid id!");
        }
    }

    render() {
        
        return <>
            <h3><i className="fa fa-angle-right"></i> All users</h3>
            <div className="text-right">
                <Link to="/users/add" className="btn btn-primary">
                    <i className="fa fa-user-plus"></i> Add new user
                </Link>
            </div>
            <div className="row mt">
            <div className="col-lg-12">
                <div className="content-panel">
                
                    <table className="table table-striped table-advance table-hover table-users">
                
                        <thead>
                            <tr>
                            <th><i className="fa fa-bullhorn"></i> ID</th>
                            <th className="hidden-phone">
                                <i className="fa fa-question-circle"></i> 
                                Username
                            </th>
                            <th><i className="fa fa-bookmark"></i> Display Name</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((user, index) => 
                                    <tr key={user._id}>
                                        <td>{index+1}</td>
                                        <td>
                                            <img src={user.avatar} alt="" />
                                            {user.username}
                                        </td>
                                        <td>{user.displayName }</td>
                                        <td className="text-center">
                                            <Link className="btn btn-primary btn-xs" to={`/users/${user._id}/edit`}>
                                                <i className="fa fa-pencil"></i>
                                            </Link>
                                            <button onClick={ () => this.deleteUser(user._id) } className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>;
    }
}