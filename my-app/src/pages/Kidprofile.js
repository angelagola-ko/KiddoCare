import React, { useState } from 'react'
import image from '../images/kid.png'

const kidProfile = (props) => {

  return (
    <main className="container mt-5">
      <div className="flex-row justify-content-center">
        {/* <img src="" alt="" class="image--cover" /> */}
        <div className="col-md-7">
          <div className="card p-3 py-4">
          <div className="text-center">
                <img src={image} alt='Profile' width="100" className="rounded-circle"></img>
            </div>
            <div class="text-center mt-3">
                    <h5 className='text-white text-center'>Tommy Tolmes</h5>
                    <div className="px-4 mt-1">
                    </div>
      </div>
      </div>
      </div>
      </div>
    </main>
  );
};

export default kidProfile;