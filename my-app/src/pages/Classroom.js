import {Container, Form, Button} from "react-bootstrap"
import {useState, useEffect} from "react"
import React from "react"
import axios from 'axios';

// function Children() {
//     const [seedChildren] = useState([])
//     useEffect( () => {
//         childrendata()}, [])
//     }
//     const childrendata = async () => {
//         const {data} = await axios.get('/');
//         setChildren(data);
//     };

const ClassRoom = (props) => {
    const [ActivityAuto] = useState({title:"Finger Painting", time: "10:30"})
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

// add functionality to button to "today's activities here". Normal JS//
    return (
        <div className= "home">
            <h1 className= "homeTitle text-white">
                Daycare Room 187
                Overview {today}
            </h1>
        
        <Container>
            <h2 className="text-white">Today's Activities</h2>
            {/* <Form.Label className="text-white">Today's Activities</Form.Label> */}
            <Form.Control
                type= "title"
                name= "title"
                value= {ActivityAuto.title}
                />
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <Container>
            <h2 className="text-white">Kids of Classroom 187</h2>
            {/* insert database with students here */}
        </Container>


        <Button onClick={console.log("test")} variant="primary">Admin Add Activities</Button>
        </div> 
    );
}

export default ClassRoom