// function App() {
//     return <h1>Hello from function component</h1>;
// }

import React from "react";
import { Route, Routes } from "react-router";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import UserAddPage from "./pages/user-add/UserAddPage";
import UserEditPage from "./pages/user-edit/UserEditPage";
import UserListPage from "./pages/user-list/UserListPage";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            user: null
        };
    }

    componentDidMount() {
        let user = localStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
        }
        this.setState({user});
    }

    render() {
        return <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={
                <section id="container">
                    <Header user={this.state.user} />
                    
                    <Aside user={this.state.user} />

                    <section id="main-content">
                        <section className="wrapper site-min-height">
                            <Routes>
                                <Route path="/users" element={ <UserListPage /> } />
                                <Route path="/users/add" element={ <UserAddPage /> } />
                                <Route path="/users/:id/edit" element={ <UserEditPage /> }  />
                            </Routes>
                        </section>
                    </section>
                    
                    <Footer />
                    
                </section>
            } />
        </Routes>;
    }
}

export default App;