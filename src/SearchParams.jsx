import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  function handleChange(event) {
    setLocation(event.target.value);
  }
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          <input
            onChange={handleChange}
            id="location"
            value={location}
            placeholder="  Location"
            type="text"
          />
        </label>
        <label htmlFor="animal">
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed('')
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
