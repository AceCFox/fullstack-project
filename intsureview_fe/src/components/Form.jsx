import { useState } from 'react';
import { API_URL } from "../constants";
import axios from "axios";

function Form() {
    const[location, setLocation] = useState('')
    const[experience, setExperience]= useState(false)
    const[position, setPosition]= useState('Blocker')
    const[goals, setGoals] = useState('')
    const[date, setDate]= useState(new Date().toISOString().split('T')[0])
    const[locationError, setLocationError] = useState(false)

    function onSubmit(){
        if(!location){
            setLocationError(true)
        }
        else{
            const lesson = {location, experience, position, goals, date}
            postLesson(lesson)
           setLocationError(false);
        }
    }

    const postLesson = async (lesson) => {
      axios
        .post(API_URL, lesson)
        .then((response) => {
            console.log(response.data);
            setGoals('');
            setLocation('');
            setPosition('Blocker');
            setDate(new Date().toISOString().split('T')[0]);
            setExperience(false);
            alert("your response has been saved!");
        }).catch((err) => {
          alert("Oops, there was a problem! "+err.message);
        });
    };

    return (
        <div>
           <label htmlFor="location">What city are you located in?</label>
           <br/>
           <input type="text" id="location" value={location} onChange={e=>setLocation(e.target.value)} required={true}/>
           <br/>
           {locationError? <p className='error'>Oops, please enter a location above</p>:<br/>}
           <label htmlFor="experience">Have you ever played roller derby before?</label>
           <br/>
           <select id="experienve" value={experience} onChange={e=>setExperience(e.target.value)}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
           </select>
           <br/><br/>
           <label htmlFor="position">What position do you prefer to play?</label>
           <br/>
           <select id="position" value={position} onChange={e=>setPosition(e.target.value)}>
                <option value='Blocker'>Blocker</option>
                <option value='Jammer'>Jammer</option>
                <option value='Pivot'>Pivot</option>
           </select>
           <br/><br/>
           <label htmlFor="goals">What are some of your goals for this lesson?</label>
           <br/>
           <textarea id="goals" value={goals} onChange={e=>setGoals(e.target.value)}/>
           <br/><br/>
           <label htmlFor="date">When would you like to schedule this lesson?</label>
           <br/>
           <input id="date" type="date" value={date} onChange={e=>setDate(e.target.value)}/>
           <br/><br/>
           <button onClick={onSubmit}>Submit</button>
        </div>
    );
  }
  
  export default Form;
  