import React, { useState } from "react";
import Switch from "../components/Switch";
import image from "../images/profilePic.jpg";

const Profile = (props) => {
  const [value, setValue] = useState(false);

  return (
    <main className="container mt-5">
      <div className="flex-row justify-content-center">
        {/* <img src="" alt="" class="image--cover" /> */}
        <div className="col-md-7">
          <div className="card py-4">
            <h3 className="card-header  text-center">Mary Tolmes</h3>
            <div className="card-body text-center">
              <div className="p-4">
                <img
                  src={image}
                  alt="Profile"
                  width="100"
                  className="rounded-circle"
                ></img>
              </div>
              <btn type="button" className="btn btn-outline-primary">
                Contact Information
              </btn>
              <div class="text-center">
                <div className="pt-4 text-white">
                  Notifications
                  <Switch isOn={value} handleToggle={() => setValue(!value)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
