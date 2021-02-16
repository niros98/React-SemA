import React, { useState } from 'react';
import './App.css';
import Slider from './Slider'
import SidebarItem from './SidebarItem'
import ChangeBackground from './BackgroundImage'
import { Button } from '@material-ui/core';
// import axios from 'axios'
// import fileDownload from 'js-file-download'



const DEFAULT_OPTIONS = [ /*the differnt buttons on sidebar */
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
  
]


const options = {
  useBoundary: true, // keep stickers inside the pad
  overflowHidden: true, // hide the edge of stickers when over edge
}

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)  /*for catch the first element in sidebar as deafult*/
  const [options, setOptions] = useState(DEFAULT_OPTIONS) /*to use edit functions from css with React
  -options is the value that we change in render */
  const selectedOption = options[selectedOptionIndex]


//   const blob = new Blob([output]);                   // Step 3
//   const fileDownloadUrl = URL.createObjectURL(blob); // Step 4
//   this.setState ({fileDownloadUrl: fileDownloadUrl}, // Step 5
//     () => {
//       this.dofileDownload.click();                   // Step 6
//       URL.revokeObjectURL(fileDownloadUrl);          // Step 7
//       this.setState({fileDownloadUrl: ""})
//   })

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {  /*loop between all the option to find the target and change it */
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  // handleDownload = (url, filename) => {
  //   axios.get(url, {
  //     responseType: 'blob',
  //   })
  //   .then((res) => {
  //     fileDownload(res.data, filename)
  //   })
  // }
   

  
  // <button onClick={() => {this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg')
  // }}>Download Image</button>

  function getImageStyle() {  /*the style we apply to image */
    const filters = options.map(option => { /*covert out css filter to make React understand */
      return `${option.property}(${option.value}${option.unit})` /*string manipulates to make it know the unit we use in option property */
    })

    return  { filter: filters.join(' ') } /*converting the array to a string*/
  }

  console.log(getImageStyle())

  return ( /*not put nothing inside - background image on screen*/
    <div className="container" > 
     <ChangeBackground  getImageStyle={getImageStyle}
   ></ChangeBackground>
     
      <div className="sidebar"> GreenApes Editor
        {options.map((option, index) => {
          return ( 
            
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex} /*if the index is in selectedOption its active(change color) */
              handleClick={() => setSelectedOptionIndex(index)} /*to change active value when we press */

              
            /> 
            
            
          )
          
        })}
{/* <a style={{display: "none"}}
         download={this.fileNames[this.state.fileType]}
         href={this.state.fileDownloadUrl}
         ref={e=>this.dofileDownload = e}
    >download it</a> */}
{/* <StickerPad
    stickers={this.state.stickers}
    handleMoveSticker={setOptions}
/> */}
      </div>
     
    
      <Slider 
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  )
}

export default App;
