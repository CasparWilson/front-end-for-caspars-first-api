import axios from 'axios'
import React from 'react'

function App() {

    const [fictionalSayings, setFictionalSayings] = React.useState([])
    const [inputStates, setInputStates] = React.useState({character_name: '', quote: ''})
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

function handleChange(event){
    setInputStates((prevState)=> ({...prevState, [event.target.name]: event.target.value}))
}

async function handleSubmit(){
    try {
      const response = await axios.post('https://caspars-first-express-db-api.onrender.com/fictional_sayings', {
        character_name: inputStates.character_name,
        quote: inputStates.quote}
      );
      console.log('Message sent:', response.data);
      // Handle successful submission (e.g., clear form, display success message)
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error (e.g., display error message)
    }
    setInputStates({character_name: '', quote: ''})
  }


    return (
        <div>
            <h1>This is the front-end for Caspar's first API</h1>
            <form>
                <input placeholder='Fictional Character' onChange={handleChange} value={inputStates.character_name} name='character_name'></input>
                <input placeholder='Their Famous Saying' onChange={handleChange} value={inputStates.quote} name='quote'></input>
                <button onClick={handleSubmit}>Submit Saying</button>
            </form>
            
        </div>
    );
}

export default App;
