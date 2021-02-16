import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import Upload from './Upload';
import $ from 'jquery';


class Header extends Component {
    //דרופ דאון בלחיצה על התמונה שבמניו
    triggerDropdown = (e) => {
        let el = $(e.target).siblings('.profile-dropdown');
        //Instead of adding or removing a class name, we can also toggle between two class names in react app.
        //https://reactgo.com/react-toggle-class/#:~:text=%20How%20to%20toggle%20a%20class%20in%20React,a%20new%20class%20name%20to%20the...%20More%20
        el.toggleClass('show');//שינוי המצב הדיפולטיבי של ארייה היידן טרו
        //למה אי אפשר הדר במקום בדי
        $('body').click(function(){
            if(el.hasClass('show')){//לפרופיל ולהחלפת יוזר יש קלאס ניים ולכן ייכנס
                el.toggleClass('show');
            }
        })
    }


    render(){
        const {currentUser} = this.props;
        return (
        <header>
            <div className="head-content">
                <div className="branding">
                    <Link to="/"><img src="https://haipo.co.il/wp-content/uploads/2012/11/%D7%90%D7%A6%D7%98%D7%93%D7%99%D7%95%D7%9F_%D7%A1%D7%9E%D7%99_%D7%A2%D7%95%D7%A4%D7%A8_-_%D7%99%D7%A0%D7%95%D7%90%D7%A8_2014_-_%D7%A6%D7%99%D7%9C%D7%95%D7%9D_-_%D7%A6%D7%91%D7%99_%D7%A8%D7%95%D7%92%D7%A8-750x419.jpg" alt="logo" /></Link>
                </div>
                <div className="nav">
                    <div className="userInfo">
                        <div className="avatar">
                            <img src={currentUser.avatar}    alt='' onClick={(e)=> this.triggerDropdown(e)} />
                            <div className="profile-dropdown">
                                <ul>
                                    <Link to={"/profile/"+currentUser.id}><li><i className="fa fa-user-circle" aria-hidden="true"></i>Profile</li></Link>
                                    <Link to="/login"><li><i className="fa fa-sign-out" aria-hidden="true"></i>Another User</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Upload
                    />
                </div>
            </div>

        </header>
        );

    }
}

export default Header;
