import {Container, Form, Button} from "react-bootstrap"
import {useState} from "react"


const ClassRoom = (props) => {
    const [ActivityAuto] = useState({title:"Finger Painting", time: "10:30"})
    return (
        <div className= "home">
            <h1 className= "homeTitle">
                Daycare Room 187
                Overview *insert date here*
            </h1>
        
        <Container>
            <h2>Today's Activities</h2>
            <Form.Label>Today's Activities</Form.Label>
            <Form.Control
                type= "title"
                name= "title"

                value= {ActivityAuto.title}
                />
        </Container>
        <Container>
            <h2>Kids of Classroom 187</h2>
        </Container>


        <Button variant="primary">Admin Add Activities</Button>
        </div> 
    );
}

export default ClassRoom