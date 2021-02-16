import { Link, withRouter } from 'react-router-dom'
import {Form , FormControl ,FormGroup , Button} from 'react-bootstrap';
import React,{ Component } from 'react';

class Hobbies extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            age: "",
            city: " ",
            fan_source : " ",

        }
    }
    setName = (e)=>{
        this.setState({name: e.target.value});

    }
    setAge = (e)=>{
        this.setState({age: e.target.value});

    }


    render(){
        return(
            <div id="New_Fan_Form">
                <Form>
                    <FormGroup>
                        <FormControl type="text" placeholder="name please" onChange={this.setName}>
                        
                        </FormControl>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
export default Hobbies;
