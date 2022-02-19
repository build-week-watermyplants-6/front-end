import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { Dialog, Transition } from "@headlessui/react";
import EditPlant from './plants/EditPlant';
import plantList from './plants/PlantsList';
import plantlist from '../plantlist'
 import AccessStyles from '../theme/AccessStyles'
 import AccessPlants from '../theme/AccessPlants'
// import App from "../App";

function Accessibility(props) {
  const { plantList } = props;
  const [open, setOpen] = useState(false);
  const [apOpen,setApOpen] = useState(false);
  

  // passed down as props so both the profile page and this page use the same slice of state
  const { profile, setProfile, initialForm } = props;
 

  // Form and event handler that you will be able to use for multiple components
  // Profile handlers
  const [form, setForm] = useState(profile);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const click = () => {
      open ? setOpen(false) : setOpen(true);
    };
  const update = (e) => {
      e.preventDefault();
      setProfile(form);
      click();
    };

  // Plant handlers
  const [apForm, setApForm] = useState(initialForm);
  const apHandleChange = (e) => {
      setForm({
        ...apForm,
        [e.target.name]: e.target.value,
      });
    };
  
  const apClick = () => {
    apOpen ? setApOpen(false) : setApOpen(true);
  }

  const apUpdate = (e) => {
    e.preventDefault();
    setApForm(apForm);
    apClick();
  }
  

  

  return (
    <div className="accessAll">
      <AccessStyles className="profile">
        <img src={profile.imageUrl} alt="" />
        <div className="info">
          <h3>
            {" "}
            <b>Name:</b> {profile.name}
          </h3>
          <input
            id="editInput"
            className={!open ? "none" : null}
            type="text"
            name="name"
            placeholder="Type name"
            value={form.name}
            onChange={handleChange}
          />
          <h3>
            {" "}
            <b>Phone:</b> {profile.phoneNumber}
          </h3>
          <input
            id="editInput"
            className={!open ? "none" : null}
            type="text"
            name="phoneNumber"
            placeholder="Type phone number"
            value={form.phoneNumber}
            onChange={handleChange}
          />{" "}
          <br />
          <button className={open ? "none" : "edit "} onClick={click}>
            Edit Profile
          </button>
          <button
            className={!open ? "none edit submit" : "edit submit"}
            onClick={update}
          >
            Submit
          </button>
          <button
            className={!open ? "edit cancel none" : "edit cancel"}
            onClick={click}
          >
            Cancel
          </button>
        </div>
      </AccessStyles>
      <AccessPlants> 
        <h3> Your plants </h3> <br/>  
        <h4 
         className={apOpen ? 'none' : 'addPlant'} 
         onClick={apClick}
         > 
         Add a Plant 
         </h4>
        <div className={apOpen ? 'form' : 'none'} >
          <h4> Add Plant Form </h4>
          <label>Nickname</label>
          <input
            type='text'
            name='nickname'
            // value={apForm.nickname}
            onChange={apHandleChange}
          />
          <label>Species</label>
          <input
            type='text'
            name='species'
            // value={apForm.species}
            onChange={apHandleChange}
          />
          <label>Watering Frequency</label>
          <input
            type='text'
            name='Watering Frequency'
            // value={apForm.h2oFrequency}
            onChange={apHandleChange}
          />
          <label>Image</label>
          <input
                type="text"
                name="image"
                id="image"
                // value={apForm.image}
                onChange={apHandleChange}
          />
          <label>Description</label>
          <input
                type="description"
                name="description"
                required
                // value={apForm.description}
                onChange={apHandleChange}
  
              />               
          <button 
           className={apOpen ? '' : 'none'} 
           onClick={apUpdate}>
             Add
          </button>
          <button 
           className={apOpen ? '' : 'none'} 
           onClick={apClick}>
             Cancel
          </button>
        </div> 

        <div className= 'myPlants'>
          {plantlist.map((ea, idx) => ( 
            <div className='each' key={idx}>
              <h4> {ea.nickname} </h4>
              <Link to={'plants/'+ ea.plant_id}>
              <img src={ea.image} alt='Your plant' />
              </Link>
              <h5> Water <b>{ea.h2oFrequency === 1 ? '1 time' : ea.h2oFrequency + ' times'}</b> <br/> per day.</h5>
            </div>
          ))}
        </div>
      </AccessPlants>
    </div>
  );
}

export default Accessibility;