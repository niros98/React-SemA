import React,{ Component } from 'react';

class Header extends Component {
    //העלאת תמונה
    constructor(props) {
        super(props)
        this.state = []
    }
    handleImageChange(e) {
        e.preventDefault();
        
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        let upload = document.getElementById('upload');

        reader.onloadend = () => {
            // return file
            
        }
    }
    // getFile = (file)=>{
    //     this.setState({imageurl : file})
    // }
    
    render(){

        return (
            <div className="upload">
                <label htmlFor="upload">
                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                </label>
                <input type="file" id="upload" onChange={(e)=>this.handleImageChange(e)}/>
            </div>
        );

    }
}

export default Header;
