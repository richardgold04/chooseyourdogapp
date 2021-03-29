import React from 'react'

function DogCard(props) {

	const {dog, setClicked, clicked} = props;

	let today = new Date();

	return (
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
	)
}

export default DogCard
