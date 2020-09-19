import React, { useState } from "react";

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [textarea, setTextarea] = useState('');
    const [isFriendly, setIsFriendly] = useState(false);
    const [gender, setGender] = useState('');
    const [favColor, setFavColor] = useState('blue');

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        const funcMap = {
          firstName: setFirstName,
          lastName: setLastName,
          textarea: setTextarea,
          isFriendly: setIsFriendly,
          gender: setGender,
          favColor: setFavColor,
        };
        // const setFuncName = `set${name.substr(0, 1).toUpperCase() + name.substr(1, name.length - 1)}`;
        type === "checkbox" ? funcMap[name](checked) : funcMap[name](value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Form submitted...`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={firstName}
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                value={lastName}
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />

            {
                /**
                 * Other useful form elements:
                 * 
                 *  <textarea /> element
                 *  <input type="checkbox" />
                 *  <input type="radio" />
                 *  <select> and <option> elements
                 */
            }
            <br/>
            <textarea
                value={textarea}
                placeholder="Enter your story here"
                name="textarea"
                onChange={handleChange}
            />

            <br />

            <label>
                <input
                    type="checkbox"
                    name="isFriendly"
                    checked={isFriendly}
                    onChange={handleChange}
                /> Is friendly?
                </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleChange}
                /> Male
                </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleChange}
                /> Female
                </label>
            {/* Formik */}
            <br />

            <label>Favorite Color:</label>
            <select
                value={favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
            </select>

            <h1>{firstName} {lastName}</h1>
            <h2>You are a {isFriendly ? 'friendly' : ''} {gender}</h2>
            <h2>Your favorite color is {favColor}</h2>
            <button>Submit</button>
        </form>
    )

}

export default App
