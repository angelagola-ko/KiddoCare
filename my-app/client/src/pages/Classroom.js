import {Container, Form, Button} from "react-bootstrap"
import {useState, useEffect} from "react"
import React, {Component} from "react"


// function Children() {
//     const [seedChildren] = useState([])
//     useEffect( () => {
//         childrendata()}, [])
//     }
//     const childrendata = async    () => {
//         const {data} = await axios.get('/');
//         setChildren(data);
//     };
function App() {
    
}
// const myList = activityArray.map((item) => <p> {item}</p>)
const ClassRoom = (props) => {
    const [ActivityAuto] = useState({title:"Finger Painting", time: "10:30"})
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const [activity_list, setActivity] = useState(["Finger Paint", "Lunch", "Nap Time"])
// add functionality to button to "today's activities here". Normal JS//
    return (
        <div className= "home">
            <h1 className= "homeTitle text-white">
                Daycare Room 187
                Overview {today}
            </h1>
        
        <Container>
            <h2 className="text-white">Today's Activities</h2>
        <ul>
        <React.Fragment className= "App">
          <ul class="list-group">
          <li class="list-group-item list-group-item-primary text-white ">{activity_list.map((activity, index) => <p key = {index}>{activity}</p>)}</li>
            {/* <li class="list-group-item list-group-item-primary">Finger Painting</li>
            <li class="list-group-item list-group-item-primary">Nap time</li>
            <li class="list-group-item list-group-item-primary">Lunch</li> */}
          </ul>
          <Button onClick={console.log("test")} variant="primary">Admin Add Activities</Button>
        </React.Fragment>
        </ul>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <Container>
            <h2 className="text-white">Kids of Classroom 187</h2>
            {/* insert database with students here */}
        </Container>
        </div> 
    );
}

export default ClassRoom