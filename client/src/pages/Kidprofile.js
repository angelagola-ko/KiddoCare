import React, { useState } from 'react'
import image from '../images/kid.png'

const kidProfile = (props) => {

  return (
    <main className="container mt-5">
      <div className="flex-row justify-content-center">
        {/* <img src="" alt="" class="image--cover" /> */}
        <div className="col-md-7">
          <div className="card py-4">
            <h3 className="card-header  text-center">Caleb Almes</h3>
            <div className="card-body text-center">
              <div className="p-4">
                <img
                  src={image}
                  alt="Profile"
                  width="100"
                  className="rounded-circle"
                ></img>
              </div>
              <div class="text-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default kidProfile;