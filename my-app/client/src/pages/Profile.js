import React, { useState } from 'react';
import Switch from "../components/Switch";
import image from '../images/gary.png';
import child from '../images/kid.png'
import Nav from "react-bootstrap/Nav";

const Profile = (props) => {
  const [value, setValue] = useState(false);


  const style = {
    display:"inline",
    justifyContent: "center",

  }
  return (
    <main className="container mt-5" style={style}>
      <div className="flex-row justify-content-center">
        {/* <img src="" alt="" class="image--cover" /> */}
        <div className="col-md-8">
          <div className="card py-4">
            <h3 className="card-header  text-center">Gary Almes</h3>
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
      
      <div class="second d-flex flex-row mt-2">
                    <div class="image mr-3">
                     <img src= {child}  alt='Child' width ='60' className="rounded-circle"></img>
                    </div>
                    <div class="">
                        <div class="d-flex flex-row mb-1">
                            <span className = 'text-white'>Caleb Almes</span>
                        </div>
                        <div>
                  
                            <button className="btn btn-light btn-sm">Edit</button><a href = '/kidprofile'></a>
                        </div>
                    </div>
    </div>
    </main>
  );
};

export default Profile;
