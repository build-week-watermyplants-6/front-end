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
  
    //   useEffect(() => {
    //     setForm(plant);
    //     console.log(form);
    //     console.log(plant);
  
    //     // axiosWithAuth()
    //     //   .get(`http://endpoint.com/api/plant/${Id}`)
    //     //   .then((res) => {
    //     //     setArticle(res.data);
    //     //   })
    //     //   .catch((err) => {
    //     //     console.log(err);
    //     //   });
    //   }, []);
  
    return (
      <div>
        <div>
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700"
              >
                Nickname
              </label>
              <div className="mt-1">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  required
                  value={form.nickname}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="species"
                className="block text-sm font-medium text-gray-700"
              >
                Scientific Name
              </label>
              <div className="mt-1">
                <input
                  id="species"
                  name="species"
                  type="text"
                  required
                  value={form.species}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
  
            <div>
              <label
                htmlFor="h2oFrequency"
                className="block text-sm font-medium text-gray-700"
              >
                Watering Frequency
              </label>
              <div className="mt-1">
                <input
                  id="h2oFrequency"
                  name="h2oFrequency"
                  type="text"
                  required
                  value={form.h2oFrequency}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                <input
                  type="text"
                  name="image"
                  id="image"
                  value={form.image}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="www.example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  required
                  value={form.description}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="submit"
                id="submit"
                className="w-full bg-green-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-900"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full bg-green-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-900"
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