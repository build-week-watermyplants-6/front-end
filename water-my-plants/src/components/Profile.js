import React, { useState, Fragment } from "react";
import EditProfile from "./EditProfile";

import { Dialog, Transition } from "@headlessui/react";

const Profile = (props) => {
  const { profile, setProfile } = props;

  const [open, setOpen] = useState(false);

  const handleEdit = (profile) => {
    setOpen(false);
    // axiosWithAuth()
    // .put(`website.com/api/login/${ID}`, profile)
    // .then((res) => {
    //   setProfile(res.data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  const handleEditSelect = () => {
    setOpen(true);
  };
  return (
    <div>
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
                  <EditProfile
                    setProfile={setProfile}
                    setOpen={setOpen}
                    profile={profile}
                    handleEdit={handleEdit}
                  />{" "}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:my-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              {" "}
              <div className="sm:flex">
                <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={profile.imageUrl}
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold">My Profile</h4>
                  <p className="mt-1">
                    <h3>
                      <b>Name: </b>
                      {profile.name}
                    </h3>
                    <h3>
                      <b>Phone: </b>
                      {profile.phoneNumber}
                    </h3>
                    <h3>
                      <b>Bio: </b>
                      {profile.bio}
                    </h3>
                    <h3>
                      <b>Interests: </b>
                      {profile.interests}
                    </h3>
                  </p>
                  <button
                    type="submit"
                    id="submit"
                    onClick={handleEditSelect}
                    className="w-full mt-8 bg-green-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;