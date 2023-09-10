import { useState } from 'react'
import './App.css'
export default function Team () {
  const [team, setTeam] = useState(11);

  const addBtn = () => {
    setTimeout(() => {
        const newTeam =team + 1;
        setTeam(newTeam);
    }, 500);
  }
//   const setIntervals = () => {

//    setInterval(() => {
//     const newTeam =team + 1;
//     setTeam(newTeam);
//    console.log(setTeam)
    
//    }, 500);

//   }

    return (
        <div className='team'>
            <h3>
                Players : {team}
            </h3>
            <button onClick={addBtn}>
                ➕
            </button>

            {/* <button onClick={setIntervals}>
                set interval
            </button> */}
        </div>
    )
}