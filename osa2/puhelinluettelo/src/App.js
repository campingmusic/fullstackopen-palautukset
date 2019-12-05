import React, { useState } from 'react'

const Person = ({person }) => {
  return (
    <li>{person.name}</li>
  )
}



const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )
//tämä kesken - onko nimi kirjassa ...
  const addPerson = (event) => {
    event.preventDefault()

    
    const personObject = {
      name: newName
    }
    if (persons.filter(obj.name === {newName}))
    {alert(`${newName} is already added to phonebook`)}
    else{
    setPersons(persons.concat(personObject))
    setNewName('')
    }
    console.log('nappia painettu ja nimi lisätty', event.target)
  
 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
          value={newName} 
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )

  }

export default App