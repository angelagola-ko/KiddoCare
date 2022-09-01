import {Container, Form} from "react-bootstrap"



const classRoom = (props) => {
    const [ActivityAuto] = useState({title:"Finger Painting"})
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
                type= "Time"
                name= "Title"
                value= {ActivityAuto.title}
                />
        </Container>
        <Container>
            <h2>Kids of Classroom 187</h2>
        </Container>


        <button>Admin Add Activities</button>
        </div> 
    );
}

export default classRoom