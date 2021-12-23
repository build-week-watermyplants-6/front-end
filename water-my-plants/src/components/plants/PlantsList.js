import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import AddPlant from "./AddPlant";
import { Dialog, Transition } from "@headlessui/react";
import { SpeakerphoneIcon } from "@heroicons/react/outline";

const PlantsList = (props) => {
  const { plantsList, setPlantsList } = props;
  const { push } = useHistory();
  const [open, setOpen] = useState(false);
  const handleClick = (e, plant) => {
    e.preventDefault();
    push(`/plants/${plant.plant_id}`);
  };

  const handleAdd = (plant) => {
    // axiosWithAuth()
    // .put(`website.com/api/plant/${ID}`, plant)
    // .then((res) => {
    //   setPlantslist(res.data);
    //   setOpen(false);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    setPlantsList((plantsList) => [...plantsList, plant]);
    setOpen(false);
  };

  const addPlantModal = () => {
    setOpen(true);
  };

  return (
    <main>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <AddPlant handleAdd={handleAdd} setOpen={setOpen} />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <div className="bg-white shadow-sm rounded-md">
          {/* <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> */}
          <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl ">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                My Plants
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {plantsList.map((plant) => (
                <div key={plant.plant_id} className="group relative">
                  <div className=" w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                    <img
                      onClick={(e) => handleClick(e, plant)}
                      src={plant.image}
                      alt={plant.image}
                      className="w-full h-full object-center object-cover"
                    />
                    <h2>{plant.nickname}</h2>
                  </div>

                  <p className="mt-4 mb-6 text-lg text-gray-700  font-bold	">
                    {plant.nickname}
                  </p>
                  {/*  */}

                  {/*  */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <AddPlant handleAdd={handleAdd} /> */}
      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-green-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-green-800">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="hidden md:inline">
                    Add a plant to the database today!
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <button
                  href="#"
                  onClick={addPlantModal}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-gray-200"
                >
                  Add Plant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlantsList;