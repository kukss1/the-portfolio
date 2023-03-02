import { useState } from 'react';
import './WelcomePage.css'

function WelcomePage() {

    const [name , setName] = useState('')

  let  nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    return ( 
        <div className='welcome_wrapper'>
            <h1>Hey what's your name</h1>
            <input 
            type="text"
            value={name}
            onChange={nameChangeHandler}
             />
             <h2 className='welcome_second_title'>Very nice {name} lets Go ?</h2>
        </div>
     );
}

export default WelcomePage;