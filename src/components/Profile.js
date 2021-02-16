import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import ImageGrid from './ImageGrid';
import Header from './Header';
import ProfileInfo from './ProfileInfo';
import '../sass/style.scss';
import Hobbies from './Hobbis';


class Profile extends Component {

    getProfile = () => {
        let userid = this.props.match.params.userid;
        let user;
        console.log(Hobbies)
        console.log(Header)
        if(userid){
            user = this.props.getUser(userid);
        }else{
            user = this.props.currentUser;
        }
        return user;
    }

    filterPosts = (posts, user) => {
        let filteredPosts = [];
        posts.map((post, i) =>{
            if(post.userid === user.id){
                filteredPosts.push(post);
            }
            return true;
        });
        return filteredPosts;
    }
    showHobbies = ()=>{
        return 

    }
    render() {
        const {sorting, updateSorting, posts, postLiker, currentUser, followHandler} = this.props;

        if(Object.keys(this.props.currentUser).length === 0){
            console.log('not logged in!');
            return <Redirect to='/login' />;
        }

        let user = this.getProfile();
        let profilePosts = this.filterPosts(posts, user);
        let finalPosts = this.props.sortPosts(sorting, profilePosts);
        let temp = Hobbies;
        console.log(Hobbies)
        return (
        <div className="main">
            <Header
            posts = {posts}
            currentUser = {currentUser}
            
            />
            
            <ProfileInfo
            user = {user}
            sorting = {sorting}
            updateSorting = {updateSorting}
            followHandler ={followHandler}
            currentUser = {currentUser}
            />
            <ImageGrid
            posts = {finalPosts}
            postLiker = {postLiker}
            user = {user}
            />
            {/* <Hobbies name={user}>

            </Hobbies> */}
        
        </div>
        
        
        );
    }
    
}
console.log(Header)


export default Profile;
