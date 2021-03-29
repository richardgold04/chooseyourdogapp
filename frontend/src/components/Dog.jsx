import React, { useState } from "react";

function Dog(props) {
  const [clicked, setClicked] = useState(false);
	const [isYounger, setisYounger] = useState("")
	const [isNeutered, setIsNeutered] = useState("all")
	const [isVaccinated, setIsVaccinated] = useState("all")
	const [genderType, setGenderType] = useState("all")

  console.log(props);

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

	let today = new Date();

  return (
    <div>
			<h1>Which dog You prefer?</h1>
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
			<div className="dogs-container">
      {filteredDogs.map((dog) => (
        <div className="dog-container" key={dog.id}>
          <div className="dog-name">{dog.name}</div>
					<div>
						<img src={dog.img} alt="dog_image"/>
					</div>
          <div>
            <button className="detail-button"
              onClick={() =>
                clicked === dog.id ? setClicked(false) : setClicked(dog.id)
              }
            >
              {clicked === dog.id ? "Hide details" : "Show details"}
            </button>
          </div>
          {clicked === dog.id ? (
            <>
              <div className="dog-detail-gender"><strong>Gender: </strong>{dog.gender.charAt(0).toUpperCase() + dog.gender.slice(1)}</div>
              <div className="dog-detail"><em><strong>Type: </strong>{dog.breed}</em></div>
              <div className="dog-detail"><strong>Age: </strong>{Math.floor((today - Date.parse(dog.birth))/31536000000)}</div>
              <div className="dog-detail"><strong>Neutered: </strong>{dog.neutered === true ? "Yes" : "No" }</div>
              <div className="dog-detail"><strong>Vaccination: </strong>{dog.vaccination === true ? "Yes" : "No" }</div>
              <div className="dog-detail"><strong>Number of colors: </strong>{dog.colors}</div>
            </>
          ) : null}
        </div>
      ))}
			</div>
    </div>
  );
}

export default Dog;