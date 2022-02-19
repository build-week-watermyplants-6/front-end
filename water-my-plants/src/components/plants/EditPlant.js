import React, {
    // useEffect,
    useState,
  } from "react";
  
  const initialForm = {
    plant_id: "",
    nickname: "",
    species: "",
    h2oFrequency: "",
    image: "",
    description: "",
  };
  
  const EditPlant = (props) => {
    const { plant, setPlant, handleEdit, setOpen } = props;
  
    const [form, setForm] = useState(plant);
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setPlant(form);
      setForm(initialForm);
      handleEdit();
    };
  
      // useEffect(() => {
      //   setForm(plant);
      //   console.log(form);
      //   console.log(plant);
  
        // axiosWithAuth()
        //   .get(`http://endpoint.com/api/plant/${Id}`)
        //   .then((res) => {
        //     setArticle(res.data);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      // }, []);
  
    return (
      <div>
        <div>
          <form
            className=""
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="nickname"
                className=""
              >
                Nickname
              </label>
              <div className="">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  required
                  value={form.nickname}
                  onChange={handleChange}
                  className=""
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="species"
                className=""
              >
                Scientific Name
              </label>
              <div className="">
                <input
                  id="species"
                  name="species"
                  type="text"
                  required
                  value={form.species}
                  onChange={handleChange}
                  className=""
                />
              </div>
            </div>
  
            <div>
              <label
                htmlFor="h2oFrequency"
                className=""
              >
                Watering Frequency
              </label>
              <div className="">
                <input
                  id="h2oFrequency"
                  name="h2oFrequency"
                  type="text"
                  required
                  value={form.h2oFrequency}
                  onChange={handleChange}
                  className=""
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className=""
              >
                Image URL
              </label>
              <div className="">
                <div className=""></div>
                <input
                  type="text"
                  name="image"
                  id="image"
                  value={form.image}
                  onChange={handleChange}
                  className=""
                  placeholder="www.example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className=""
              >
                Description
              </label>
              <div className="">
                <textarea
                  id="description"
                  name="description"
                  required
                  value={form.description}
                  onChange={handleChange}
                  className=""
                />
              </div>
            </div>
  
            <div className="">
              <button
                type="submit"
                id="submit"
                className=""
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className=""
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditPlant;