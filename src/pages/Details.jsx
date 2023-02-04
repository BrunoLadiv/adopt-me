import { useState , useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../API/fetchPet";
import Carousel from "../Components/Carousel";
import Modal from "../Components/Modal";
import AdoptedPetContext from "../Context/AdoptedPet";


export default function Details() {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [_,setAdoptedPet] = useContext(AdoptedPetContext)
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="ring">
        Loading
        <span></span>
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button onClick={()=> setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {
          showModal ? (
            <Modal>
              <div >
                <h1>Would you like to adopt {pet.name} ?</h1>
                <div className="buttons">
                  <button onClick={() => {
                    setAdoptedPet(pet)
                    navigate('/')
                  }}>Yes</button>
                  <button onClick={()=> setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ):null
        }
      </div>
    </div>
  );
}
