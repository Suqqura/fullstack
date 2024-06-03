// puhelinluettelo, 2.6 - 2.15* done

// imports
import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

// App
const App = () => {
	// test Data 2.11 is in db.json

	// States
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [searchName, setSearchName] = useState('')

	// Effect Hook
	useEffect(() => {
		console.log('effect hook runs')
		personService
		.getAll()
		.then(initialPersons => {
			console.log('promise fulfilled', initialPersons)
			setPersons(initialPersons)
		})
		.catch(error => {
			console.log('error fetching persons', error)
		})
	}, [])
	console.log('render', persons.length, 'persons')

	// Event handlers
	const handleNameChange = (event) => {
		console.log('name change:', event.target.value)
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		console.log('number change:', event.target.value)
		setNewNumber(event.target.value)
	}

	const handleSearchChange = (event) => {
		console.log('search change:', event.target.value)
		setSearchName(event.target.value)
	}

	// Add new person
	const addPerson = (event) => {
		event.preventDefault()
		console.log('addPerson called')

		const oldPerson = persons.find(person => person.name === newName)
		if (oldPerson) {
		const confirmUpdate = window.confirm(
			`${newName} is already added to phonebook, replace the old number with a new one?`
		)
		if (confirmUpdate) {
			const updatedPerson = { ...oldPerson, number: newNumber }
			console.log('updating person', updatedPerson)
			personService
			.update(oldPerson.id, updatedPerson)
			.then(returnedPerson => {
				console.log('person updated', returnedPerson)
				setPersons(persons.map(person =>
				person.id !== oldPerson.id ? person : returnedPerson
				))
				setNewName('')
				setNewNumber('')
			})
			.catch(error => {
				console.log('error updating person', error)
				alert(`The person '${oldPerson.name}' was already deleted from the server`)
				setPersons(persons.filter(p => p.id !== oldPerson.id))
			})
		}
		} else {
		const personObject = { 
			name: newName, 
			number: newNumber,
		}

		console.log('creating person', personObject)
		personService
			.create(personObject)
			.then(returnedPerson => {
			console.log('person created', returnedPerson)
			setPersons(persons.concat(returnedPerson))
			setNewName('')
			setNewNumber('')
			})
			.catch(error => {
			console.log('error updating person', error)
			alert(`The person '${oldPerson.name}' was already deleted from the server`)
			setPersons(persons.filter(p => p.id !== oldPerson.id))
			})
		}
	}

	// Delete person
	const deletePerson = (id) => {
		const person = persons.find(person => person.id === id)
		const confirmDelete = window.confirm(`Delete ${person.name}?`)

		if (confirmDelete) {
		console.log('deleting person', id)
		personService
			.delete(id)
			.then(() => {
				console.log('person deleted', id)
				setPersons(persons.filter(person => person.id !== id))
			})
			.catch(error => {
			console.log('error deleting person', error)
			alert(`Failed to delete the person '${person.name}' from the server`)
			})
		}
	}

	// Filter / Search function
	const personsToShow = searchName
		? persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
		: persons

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />

      <h3>add a new</h3>

      <PersonForm 
        newName={newName} 
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} deletePerson={deletePerson} />

      <p> </p>
      <div>debug search: {searchName}</div>
      <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div>

    </div>
  )
}

// dont delete
export default App
