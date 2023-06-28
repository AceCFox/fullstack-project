import { useState } from 'react';

function Form() {
    const[location, setLocation] = useState('')
    const[experience, setExperience]= useState(false)
    const[position, setPosition]= useState('Blocker')
    const[goals, setGoals] = useState('')
    const[date, setDate]= useState(new Date())
    const[locationError, setLocationError] = useState(false)

    function onSubmit(){
        if(!location){
            setLocationError(true)
        }
        else{
            alert( 'location: ' + location +
                '  experience: ' + experience+ 
                '  position: ' + position +
                '  goals: ' + goals + 
                '  date: ' +date);
           setLocationError(false);
        }
    }

    return (
        <div>
           <label for="location">What city are you located in?</label>
           <br/>
           <input type="text" id="location" value={location} onChange={e=>setLocation(e.target.value)} required={true}/>
           <br/>
           {locationError? <p className='error'>Oops, please enter a location above</p>:<br/>}
           <label for="experience">Have you ever played roller derby before?</label>
           <br/>
           <select id="experienve" value={experience} onChange={e=>setExperience(e.target.value)}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
           </select>
           <br/><br/>
           <label for="position">What position do you prefer to play?</label>
           <br/>
           <select id="position" value={position} onChange={e=>setPosition(e.target.value)}>
                <option value='Blocker'>Blocker</option>
                <option value='Jammer'>Jammer</option>
                <option value='Pivot'>Pivot</option>
           </select>
           <br/><br/>
           <label for="goals">What are some of your goals for this lesson?</label>
           <br/>
           <textarea id="goals" value={goals} onChange={e=>setGoals(e.target.value)}/>
           <br/><br/>
           <label for="date">When would you like to schedule this lesson?</label>
           <br/>
           <input id="date" type="date" value={date} onChange={e=>setDate(e.target.value)}/>
           <br/><br/>
           <button onClick={onSubmit}>Submit</button>
        </div>
    );
  }
  
  export default Form;
  