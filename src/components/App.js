import React, { Component } from 'react';
import '../App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import {setUsers, setCurrentUser, setPosts, setallComments, setSorting} from '../Actions';
import Profile from './Profile.js';
import Home from './Home.js';
import Photo from './Photo';
import Login from './Login.js';
import Comments from './Comments';
import Active_Users from './Hobbis';
import Temp from './Temp';
import user10 from './userszz';
import Header from './Upload';
import Hobbis from './Hobbis';
import Hobbies from './Hobbis';


var DefaultAvatar = 'https://i.postimg.cc/FHh1RDbt/128px-Creative-Tail-Animal-kangoroo-svg.png'
class App extends Component {

    componentDidMount(){//לאחר שכל הקומפוננטות ו/או הילדים מקוימים תקרא פונקציה זו לצורך רנדור

        this.loadData();//קריאה לפונקציה כמפורט מטה
        this.store = this.props.store;//אתחול
    }

    loadData = () => {//
        //const {users,posts, allComments} = this.state;
        const {users, posts, allComments} = this.props.store.getState();
        let user;
        let singlePost;
        let postComments;
        const url = `https://www.mocky.io/v2/5c14f7d73400005c1cb8e985`;

   
        var tempp = [{//רשימת משתמשים
            "id": "1",
            "name": "matan grainim",
            "avatar": "https://tse1.mm.bing.net/th?id=OIP.dN603-Z9V2cMY0p0j4COawHaHa&pid=Api&P=0&w=300&h=300",
            "followers": 10000,
            "following": 2000,
            "posts": [{
                    "id": "insta-6ea7773c",
                    "imageUrl": "https://i.ytimg.com/vi/DR69dEgXC6s/maxresdefault.jpg",
                    "likes": 752,
                    "timestamp": "2020-04-16 14:23:45",
                    "comments" : [
                        {
                            "authorid" : "2",
                            "text":"Fantastic Photo"
                        }
                    ]
                },
                {
                    "id": "insta-7f2d4157",
                    "imageUrl": "https://images1.calcalist.co.il/PicServer3/2016/07/07/620114/YE1958230_l.jpg",
                    "likes": 681,
                    "timestamp": "2017-04-17 14:23:45"
                },
                {
                    "id": "insta-9041974b",
                    "imageUrl": "https://i.ytimg.com/vi/0k7YswWWPsY/hq720.jpg",
                    "likes": 728,
                    "timestamp": "2017-04-19 14:23:45"
                },
                {
                    "id": "insta-100ccb04a",
                    "imageUrl": "https://www.mhod.co.il/wp-content/uploads/2018/12/received_2105422329524194.jpeg",
                    "likes": 662,
                    "timestamp": "2017-04-20 14:23:45"
                },
                {
                    "id": "insta-1131f79ff",
                    "imageUrl": "https://www.resporter.co.il/Sites/Resporter/UserContent/UserMedia/14241/Videos/988ddc73-4d24-4859-ab83-795edcdc7638_thumb0.jpg",
                    "likes": 279,
                    "timestamp": "2017-04-21 14:23:45"
                },
                {
                    "id": "insta-123a00217",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvigB3NG-fzEQBxggkM1UgrdJ5ur3c-lL6A&usqp=CAU",
                    "likes": 672,
                    "timestamp": "2017-04-23 14:23:45"
                },
                {
                    "id": "insta-1344b7582",
                    "imageUrl": "https://i.postimg.cc/mDMNSCy4/insta-1344b7582.jpg",
                    "likes": 260,
                    "timestamp": "2017-04-24 14:23:45"
                },
                {
                    "id": "insta-144f684d4",
                    "imageUrl": "https://haifatimes.co.il/wp-content/uploads/2016/07/shanie_bettan_1.jpg",
                    "likes": 881,
                    "timestamp": "2017-04-25 14:23:45"
                },
                {
                    "id": "insta-155b9c1ee",
                    "imageUrl": "https://i.postimg.cc/7P3nG1LM/insta-155b9c1ee.jpg",
                    "likes": 993,
                    "timestamp": "2017-04-26 14:23:45"
                },
                {
                    "id": "insta-16795b053",
                    "imageUrl": "https://i.postimg.cc/Fshgjfdt/insta-16795b053.jpg",
                    "likes": 1024,
                    "timestamp": "2017-04-27 14:23:45"
                },
                {
                    "id": "insta-17a21aad9",
                    "imageUrl": "https://i.postimg.cc/Gm2F5Zxq/insta-17a21aad9.jpg",
                    "likes": 729,
                    "timestamp": "2017-04-28 14:23:45"
                },
                {
                    "id": "insta-1878832d3",
                    "imageUrl": "https://i.postimg.cc/T34VMCkG/insta-1878832d3.jpg",
                    "likes": 140,
                    "timestamp": "2017-04-29 14:23:45"
                },
                {
                    "id": "insta-1980e24ae",
                    "imageUrl": "https://i.postimg.cc/YSL1pYVF/insta-1980e24ae.jpg",
                    "likes": 760,
                    "timestamp": "2017-04-30 14:23:45"
                },
                {
                    "id": "insta-20897a83a",
                    "imageUrl": "https://i.postimg.cc/MTk1XX2F/insta-20897a83a.jpg",
                    "likes": 669,
                    "timestamp": "2017-05-01 14:23:45"
                }
            ]
        }, {
            "id": "2",
            "name": "Berkovich",
            "avatar" : "https://img.mako.co.il/2009/08/19/berkovic_celticc.jpg",
            "followers": 3000,
            "following": 80000,
            "posts": [{
                    "id": "insta-2c611827",
                    "imageUrl": "https://a7.org/pictures/946/946705.jpg",
                    "likes": 270,
                    "timestamp": "2018-06-13 14:23:45"
                },
                {
                    "id": "insta-3d151734",
                    "imageUrl": "https://images1.ynet.co.il/PicServer5/2017/02/02/7562164/75621566934949801482no.jpg",
                    "likes": 380,
                    "timestamp": "2018-06-14 14:23:45"
                },
                {
                    "id": "insta-4dccf2bf",
                    "imageUrl": "https://haipo.co.il/wp-content/uploads/2017/09/1167887-5.jpg",
                    "likes": 400,
                    "timestamp": "2018-08-15 14:23:45"
                },
                {
                    "id": "insta-1b956cd6",
                    "imageUrl": "https://i.postimg.cc/XvrrfWk6/insta-1b956cd6.jpg",
                    "likes": 5040,
                    "timestamp": "2018-09-12 14:23:45"
                }
            ]
        },
        {
            "id": "3",
            "name": "yaniv",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/7/7a/MHFC-Yaniv-Katan.jpg",
            "followers": 9000,
            "following": 89678996,
            "posts": [{
                    "id": "insta-8fb860e0",
                    "imageUrl": "https://images.one.co.il/images/one/450_250/gg836071.jpg",
                    "likes": 925,
                    "timestamp": "2018-04-18 14:23:45"
                },
                {
                    "id": "insta-Jh7dz68F",
                    "imageUrl": "http://www.ynet.co.il/PicServer2/28102008/1685550/GP5L9510_wa.jpg",
                    "likes": 1089,
                    "timestamp": "2018-11-18 14:23:45"
                },
                {
                    "id": "insta-VvXFRn1M",
                    "imageUrl": "https://i.ytimg.com/vi/9S5i7wFLjiM/maxresdefault.jpg",
                    "likes": 9870,
                    "timestamp": "2018-12-18 14:23:45",
                    "comments" : [
                        {
                            "authorid" : "2",
                            "text":"Lovely Click"
                        },
                        {
                            "authorid" : "1",
                            "text":"I Love the photo"
                        }
                    ]
                }
            ]
        },
        {
            "id": "4",
            "name": "niro",
            "avatar": "https://green-apes.com/wp-content/uploads/2016/12/LEGALIZE.png",
            "followers": 10,
            "following": 25,
            "posts": [{
                    "id": "insta-123fd-Ds",
                    "imageUrl": "https://i.postimg.cc/2yJpHv0Y/insta-123fd-Ds.jpg",
                    "likes": 5,
                    "timestamp": "2018-12-02 14:23:45",
                    "comments" : [
                        {
                            "authorid" : "1",
                            "text":"Lovely Click"
                        }
                    ]
                },
                {
                    "id": "insta-123fe-Ds",
                    "imageUrl": "https://i.postimg.cc/G3S1hwdf/insta-123fe-Ds.jpg",
                    "likes": 12,
                    "timestamp": "2018-12-10 14:23:45",
                    "comments" : [
                        {
                            "authorid" : "3",
                            "text":"Lovely Click"
                        },
                        {
                            "authorid" : "1",
                            "text":"I Love the photo"
                        },
                        {
                            "authorid" : "2",
                            "text":"Wow! Click"
                        }
                    ]
                },
                {
                    "id": "insta-123ff-Ds",
                    "imageUrl": "https://i.postimg.cc/YqGBvnSC/insta-123ff-Ds.jpg",
                    "likes": 22,
                    "timestamp": "2018-08-15 14:23:45",
                    "comments" : [
                        {
                            "authorid" : "2",
                            "text":"Fantastic Photo"
                        },
                        {
                            "authorid" : "1",
                            "text":"I Love the photo"
                        }
                    ]
                }
            ]
        }
    ]
        
        
       

    
        
        //קטע קוד להמרת המשתמשים לרשימה שלנו במקום יואראל להמשך עבודה גלובאלית באפליקציה עם המשתנים הנכונים
        fetch(url)
        .then((response) => {
            response.json().then((data) => {
                if (response.status === 200) {
                    data.forEach((item, i) => {
                       
                        // console.log(item.avatar)
                        // console.log(tempp[i].avatar)
                        item.id = tempp[i].id;
                        item.name = tempp[i].name;
                        item.followers = tempp[i].followers;
                        item.following = tempp[i].following;
                        item.avatar = tempp[i].avatar
                        item.posts = tempp[i].posts
                        
                        console.log()
                        
                        
                        
                        // user={id:tempp[i].id, name:tempp[i].name, following:tempp[i].following, followers: tempp[i].followers, avatar: item.avatar ? item.avatar : DefaultAvatar}
                        // user={id:tempp[i].id, name:tempp[i].name, following:tempp[i].following, followers: tempp[i].followers, avatar: tempp[i].avatar}         
                        // user={id:tempp[i].id, name:tempp[i].name, following:tempp[i].following, followers: tempp[i].followers, avatar: tempp[i].avatar ? tempp[i].avatar : DefaultAvatar}
                        user={id:item.id, name:item.name, following:item.following, followers:item.followers, avatar: item.avatar ? item.avatar : DefaultAvatar}
                        user['liked'] = [];
                        user['followersids'] = [];
                        user['followingids'] = [];
                        item.posts.forEach((post, i) => {
                            
                            singlePost = {id:post.id, userid:item.id, likes: post.likes, timestamp: post.timestamp, imageUrl: post.imageUrl}
                            // singlepost2 = {id: post.id , userid : item.id , likes:post.like , timestamp : post.timestamp , imageUrl:tempp[i].posts[i].imageUrl}
                            posts.push(singlePost);
                            postComments = {postid:post.id, comments:post.comments ? post.comments : []}
                            allComments.push(postComments);
                        });
                        
                        users.push(user);
                    });
                } else {
                    console.log('Sorry, Unable to retrieve data from API');
                }
            //this.setState({users,posts, allComments});

            //dispatch ==Redux sotre function
            //store.dispatch ==dispatch action
            //ובמקרה שלנו פעולת הזנת המשתמשים וערכיהם(תמונות תגובות וכ'ו) ובעצם את הפאצ והפוש
            this.store.dispatch(setUsers(users));
            this.store.dispatch(setPosts(posts));
            this.store.dispatch(setallComments(allComments));
        }).catch((error) => {//תפיסת הודעת שגיאה מקוסטמת
            console.log('Call is Not Successful '+error);
        })
      }).catch((error) => {//כנל
            console.log('API Not Responding'+error)
        });
    }
    updateSorting = (sort) => {//פונקציה לעדכון המיון לפי בחירה
        //this.setState({sorting: sort})
        this.store.dispatch(setSorting(sort));
    }
    updateComments = (comments) => {//עדכון תגובות
        //this.setState({allComments : comments})
        this.store.dispatch(setallComments(comments));
    }

    updateCurrentUser = (userid) => {//יוזר נוכחי
        //const {users} = this.state;
        const {users} = this.store.getState();
        let newUser;
        users.forEach((user)=>{
            if(user.id === userid){
                newUser = user;
            }
            return true;
        });
        //this.setState({currentUser:newUser})
        this.store.dispatch(setCurrentUser(newUser));
    }
//prevState.components.splice(i, element) returns a new array containing the elements which have been removed, which for your purposes is going to be nothing.

    followHandler = (followingid) => {//רץ ובודק באיזה יוזר מדובר ולאיזה יוזר נעשה הפולו
        
        //const {users, currentUser} = this.state;
        const {users, currentUser} = this.store.getState();
        let followersid = currentUser.id;
        users.map((user) => {
            if(user.id === followersid){
                if(user.followingids.indexOf(followingid) < 0){
                    user.following += 1;
                    user.followingids.push(followingid);
                }else{
                    user.following -= 1;
                    user.followingids.splice(followingid,1);
                }
            }

            if(user.id === followingid){
                if(user.followersids.indexOf(followersid) < 0){
                    user.followers += 1;
                    user.followersids.push(followersid);
                }else{
                    user.followers -= 1;
                    user.followersids.splice(followersid,1);
                }
            }
            return true;
        });
        //this.setState({users});
        this.store.dispatch(setUsers(users));
    }
    getUser = (userid) => {
        //const {users} = this.state;
        const {users} = this.store.getState();
        let user;
        users.some((u) => {
            if(u.id === userid){
                user = u;
                return true;
            }
            return false;
        });
        return user;
    }
    
    getComments = (postid) => {
        //const{allComments} = this.state;
        const{allComments} = this.store.getState();
        let filteredComments;
        allComments.some((commentObj) => {
            if(commentObj.postid === postid){
                    filteredComments = commentObj.comments !== undefined ? commentObj.comments : [];
                    return true;
            }
            return false;
        })
        return filteredComments;
    }
    deletePost = (postid) => {
        //const {posts, allComments, currentUser} = this.state;
        const {posts, allComments, currentUser} = this.store.getState();
        posts.some((post, i) => {
            if(post.id === postid){
                if(post.userid === currentUser.id){
                    posts.splice(i,1);
                    allComments.some((postComments, j) => {
                        if(postComments.postid === postid){
                            allComments.splice(j,1);
                            return true;
                        }
                        return null;
                    });
                    return true;
                }
            }
            return null;
        });
        //this.setState({posts, allComments});
        this.store.dispatch(setallComments(allComments));
        this.store.dispatch(setPosts(posts));
    }
    postLiker = (postid) => {
        //const {posts, currentUser} = this.state;
        const {posts, currentUser} = this.store.getState();

        posts.some((post, i) => {
            if(post.id === postid){
                let Likedindex = currentUser.liked.indexOf(postid)
                if(!(Likedindex >= 0)){
                    post.likes += 1;
                    currentUser.liked.push(postid);
                    return null;
                }else{
                    post.likes -= 1;
                    currentUser.liked.splice(Likedindex, 1);
                    return null;
                }
            }
            return null;
        });
        //this.setState({posts});
        this.store.dispatch(setPosts(posts));
    }
 
    sortPosts = (sorting, posts) => {//מיון פוסטים לפי תאריך שמתקבל מהגייסון פוסטים בתאריך סטאמפ אחרת לפי המיון שמתקבל
        let sortedPosts;
        if(sorting === 'timestamp'){
            sortedPosts = posts.sort(function(obj1, obj2) {
            	return Date.parse(obj2[sorting]) - Date.parse(obj1[sorting]);//retrieve a date variable from a JSON object in a string format
            });
        } else{
            sortedPosts = posts.sort(function(obj1, obj2) {
            	return obj2[sorting] - obj1[sorting];
            });
        }
        return sortedPosts;
    }
    // gethob = ()=>{
    //     var temp = Hobbies;
    //     return temp;


    // }
    render() {
        //const {sorting, posts, users, currentUser, allComments} = this.state;
        const {sorting, posts, users, currentUser, allComments , hob} = this.props.store.getState();
        let sortedPosts = this.sortPosts(sorting, posts);
       

        return (

            <div>
            <Switch>
                <Route exact path='/login' render={() => (
                    <Login
                    
                        users = {users}
                        updateCurrentUser = {this.updateCurrentUser}
                        currentUser = {currentUser}
                        // hob = {this.gethob}
                    />
                )}/>
                <Route exact path='/' render={() => (
                    <Home
                    currentUser = {currentUser}
                    posts = {sortedPosts}
                    postLiker = {this.postLiker}
                    deletePost = {this.deletePost}
                    sorting = {sorting}
                    sortPosts = {this.sortPosts}
                    getUser = {this.getUser}
                    followHandler = {this.followHandler}
                    allComments = {allComments}
                    updateComments = {this.updateComments}
                    getComments = {this.getComments}
                    />
                )}/>
                <Route exact path='/profile/:userid' render={(props) => (
                    <Profile
                    {...props}
                    currentUser = {currentUser}
                    getUser = {this.getUser}
                    posts = {sortedPosts}
                    sorting = {sorting}
                    sortPosts = {this.sortPosts}
                    deletePost = {this.deletePost}
                    updateSorting = {this.updateSorting}
                    postLiker = {this.postLiker}
                    followHandler = {this.followHandler}
                    
                    />
                )}/>
                <Route exact path='/photo/:postid' render={(props) => (
                    <Photo
                    {...props}
                    posts = {sortedPosts}
                    currentUser = {currentUser}
                    deletePost = {this.deletePost}
                    postLiker = {this.postLiker}
                    getUser = {this.getUser}
                    followHandler = {this.followHandler}
                    allComments = {allComments}
                    updateComments = {this.updateComments}
                    getComments ={this.getComments}
                    />
                )}/>
                <Route exact path='/comments/:postid' render={(props) => (
                    <Comments
                    {...props}
                    posts = {sortedPosts}
                    currentUser = {currentUser}
                    getUser = {this.getUser}
                    allComments = {allComments}
                    updateComments = {this.updateComments}
                    getComments = {this.getComments}
                    />
                )}/>
                <Redirect from='*' to='/' />
            </Switch>
            <div>

            </div>
        
           
            </div>
            
            
        );

        }
    }

export default App;
