import React, { useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import "./Plant.css";

import EditPlant from "./components/plants/EditPlant";

const Plant = (props) => {
  const {
    plantsList,
    // setPlantsList
  } = props;
  const { id } = useParams();

  const arrayNum = id - 1;
  const plantSelected = plantsList[arrayNum];

  const [plant, setPlant] = useState(plantSelected);

  const [open, setOpen] = useState(false);

  const handleEdit = (plant) => {
    setOpen(false);
    // axiosWithAuth()
    // .put(`website.com/api/plant/${ID}`, plant)
    // .then((res) => {
    //   setPlantsList(res.data);
    //   setOpen(false);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  const handleEditSelect = () => {
    setOpen(true);
  };

  return (
    <div className="card">
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
                  <EditPlant
                    // handleEditCancel={handleEditCancel}
                    plant={plant}
                    setPlant={setPlant}
                    plantsList={plantsList}
                    setPlantsList={plantsList}
                    handleEdit={handleEdit}
                    setOpen={setOpen}
                  />{" "}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <main
        className="
        mt-8 
      max-w-2xl mx-auto 
      pb-16 px-4 
      sm:pb-24 sm:px-6 
      lg:max-w-5xl lg:px-8"
      >
        <div
          className="
        lg:grid 
        lg:grid-cols-12 
        lg:auto-rows-min 
        lg:gap-x-8"
        >
          <div className="lg:col-start-8 lg:col-span-5">
            <div className="flex justify-between">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {plant.nickname}
              </h1>
            </div>

            <div className="mt-4">
              <p className="text-2xl text-gray-900 italic">{plant.species}</p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
            <h2 className="sr-only">Image</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows2 lg:gap-8">
              <img
                src={plant.image}
                alt={plant.image}
                className="lg:col-span-2 lg:row-span-2 rounded-lg"
              />
            </div>
          </div>

          <div className=" lg:col-span-5">
            <div>
              <p className="mt-8 prose-sm text-gray-500">{plant.description}</p>
            </div>

            <div className="watering-img">
              <p className="watering">
                Watering Frequency:
                {plant.h2oFrequency} X / day
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleEditSelect}
                className="w-full bg-green-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
              >
                Edit
              </button>
              <button
                type="button"
                className="w-full bg-red-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div class="bottom-buttons">
          <button class="button">
            {" "}
            <h3>How to Water your plants</h3>{" "}
          </button>
          <button class="button">
            {" "}
            <h3>How to Fertilize</h3>{" "}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Plant;