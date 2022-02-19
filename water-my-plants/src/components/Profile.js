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
          className=""
          onClose={setOpen}
        >
          <div className="">
            <Transition.Child
              as={Fragment}
              enter=""
              enterFrom=""
              enterTo=""
              leave=""
              leaveFrom=""
              leaveTo=""
            >
              <Dialog.Overlay className="" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className=""
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter=""
              enterFrom=""
              enterTo=""
              leave=""
              leaveFrom=""
              leaveTo=""
            >
              <div className="">
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

      <div className="">
        <div className="">
          <div className="">
            <div className="">
              {" "}
              <div className="">
                <div className="">
                  <img
                    className=""
                    src={profile.imageUrl}
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="">My Profile</h4>
                  <p className="">
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
                    className=""
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