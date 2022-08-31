import {Container} from "react-bootstrap"



const classRoom = (props) => {
    return (
        <div className= "home">
            <h1 className= "homeTitle">
                Daycare Room 187
                Overview *insert date here*
            </h1>
        
        <Container>
            <h2>Today's Activities</h2>
        </Container>
        <Container>
            <h2>Students of Classroom 187</h2>
        </Container>
        </div> 
    );
}

export default ClassRoom