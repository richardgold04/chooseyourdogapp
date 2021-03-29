import React, { useState } from 'react'

function Filter(props) {

	const [clicked, setClicked] = useState(false);
	const [isYounger, setisYounger] = useState("")
	const [isNeutered, setIsNeutered] = useState("all")
	const [isVaccinated, setIsVaccinated] = useState("all")
	const [genderType, setGenderType] = useState("all")

	let filteredDogs = props.dogs

	if (isYounger !== ""){
		filteredDogs = filteredDogs.filter((dog) => Date.parse(isYounger) < Date.parse(dog.birth))
	}

	if (isNeutered !== "all"){
		filteredDogs = filteredDogs.filter((dog) => {
			return dog.neutered === (isNeutered === "true")})
	}

	if (isVaccinated !== "all"){
		filteredDogs = filteredDogs.filter((dog) => {
			return dog.vaccination === (isVaccinated === "true")})
	}

	if (genderType !== "all"){
		filteredDogs = filteredDogs.filter((dog) => {
			return dog.gender === genderType})
	}

	return (
		<div className="filter-container">
				<h3>Filter by age</h3>
        <input onChange={(e) => setisYounger(e.target.value)} type="date"/>
				<h3>Filter by neuter</h3>
				<select onChange={(e) => setIsNeutered(e.target.value)}>
					<option value="all">All</option>
					<option value={true}>Neutered</option>
					<option value={false}>Non-neutered</option>
				</select>
				<h3>Filter by vaccinate</h3>
				<select onChange={(e) => setIsVaccinated(e.target.value)}>
					<option value="all">All</option>
					<option value={true}>Vaccinated</option>
					<option value={false}>Non-vaccinated</option>
				</select>
				<h3>Filter by gender</h3>
				<select onChange={(e) => setGenderType(e.target.value)}>
					<option value="all">All</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
      </div>
	)
}

export default Filter
