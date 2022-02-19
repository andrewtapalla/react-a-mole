import Mole from './Mole'
import { useState } from 'react'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
    let [theMole, setTheMole ] = useState(false)

    let boppedMole = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={boppedMole} /> : <EmptySlot toggle={setTheMole} />
    
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            <h2> {displayMole} </h2>
            <Mole />
        </div>
    )
}

export default MoleContainer