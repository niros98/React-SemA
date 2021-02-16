import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import logo from '../img/Green apps logo.png';
import '../sass/style.scss';
import Active_Users from './Hobbis';
import Hobbis from './Hobbis';

class Login extends Component {
//צריך להיות כפונקציה קומפוננטית
    render() {
        const {users,currentUser, updateCurrentUser} = this.props;
        return (
        <div className="main">
            <div className="login-logo">
                <img  src={logo}    style={{width: "500px"}} alt='logo'/>
            </div>
            <div className="user-list" role="grid">
            { !(Object.keys(this.props.currentUser).length === 0)
                ? <h2> Logged in as: {currentUser.name} <Link to="/"><p> Go to Home</p></Link> </h2>
                : <h2>Login As:</h2>
             }
                <ul>
                    {users.map((user, i) =>
                        <UserCard
                        key = {user.id}
                        user = {user}
                        updateCurrentUser = {updateCurrentUser}
                        />
                    )
                    }
                </ul>
            </div>
            <div>
                
            </div>
        </div>
        );
    }
}

export default Login;
