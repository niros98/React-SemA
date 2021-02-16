import React from 'react'
import './App.css';

export default class ChangeBackground extends React.Component {
    uploadImage = (e) => {
        const { files } = e.target;
        if (files.length === 0) {
          return;
        }
   
        const file = files[0];
        const fileReader = new FileReader();
    
        fileReader.onload = () => {
          this.background.style.backgroundImage = `url(${fileReader.result})`;
          console.log(fileReader.result);
        };
        fileReader.readAsDataURL(file);
        console.log(file)
  
        
      };
     
    
      render() {
        return (
          <div  >
            <input type="button" className="upload"
            
              accept="image/*"
              type="file"
              
              onChange={this.uploadImage}
              
            />
            <div className="main-image"
              style={this.props.getImageStyle()}
              ref={ref => this.background = ref}
              
              
            ></div>
           
          </div>
          
          
        );
        
    
           
           
      }
      
      
    }
    
