import { useState } from "react"

export default function Team(){
    const [team , setTeam] = useState(11)
    const teamStyle = {
        border : '2px solid purple',
        margin : '15px',
        padding : '15px',
        borderRadius: '20px'
    }
    const handelAdd = ()=>{
        const newCount = team+1;
        setTeam(newCount)
    }
    const handelRemove = ()=>{
        const newCount = team-1;
        setTeam(newCount)
    }
    return(
        <div style={teamStyle}>
            <h3>players: {team}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelRemove}>Remove</button>
        </div>
    )
}