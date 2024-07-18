// @ts-nocheck
import axios from "axios";
import React from "react";

function App() {
    const [fictionalSayings, setFictionalSayings] = React.useState([]);
    const [inputStates, setInputStates] = React.useState({
        character_name: "",
        quote: "",
    });
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

    function handleChange(event) {
        setInputStates((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    async function handleClick() {
        try {
            const response = await axios.get(
                "https://caspars-first-express-db-api.onrender.com/fictional_sayings",
            );
            setFictionalSayings(response.data)
            console.log('messages received');
        } catch (error) {
            console.error("Error getting messages: ", error);
        }
    }

    async function handleSubmit() {
        try {
            const response = await axios.post(
                "https://caspars-first-express-db-api.onrender.com/fictional_sayings",
                {
                    character_name: inputStates.character_name,
                    quote: inputStates.quote,
                },
            );
            console.log("Message sent:", response.data);
        } catch (error) {
            console.error("Error sending message:", error);
        }
        setInputStates({ character_name: "", quote: "" });
    }

    let displayedSayings = fictionalSayings.map(
        (saying) => `<p>${saying.character_name}: ${saying.quote}</p>`,
    );

    return (
        <div>
            <h1>Please add your favourite </h1>
            <form>
                <input
                    placeholder="Fictional Character"
                    onChange={handleChange}
                    value={inputStates.character_name}
                    name="character_name"
                ></input>
                <input
                    placeholder="Their Famous Saying"
                    onChange={handleChange}
                    value={inputStates.quote}
                    name="quote"
                ></input>
                <button onClick={handleSubmit}>Submit Saying</button>
            </form>
            <button onClick={handleClick}>Display Sayings</button>
            {displayedSayings}
        </div>
    );
}

export default App;
