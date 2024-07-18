import axios from 'axios'
import React from 'react'

function App() {

    const [fictionalSayings, setFictionalSayings] = React.useState([])
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


    return (
        <div>
            <h1>This is the front-end for Caspar's first API</h1>
            <form>
                <input placeholder='Fictional Character'></input>
                <input placeholder='Their Famous Saying'></input>
                <button>Submit Saying</button>
            </form>
            
        </div>
    );
}

export default App;
