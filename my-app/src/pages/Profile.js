import React, { useState } from 'react';
import Switch from "../components/Switch";
import image from '../images/profilePic.jpg';
import child from '../images/kid.png'

const Profile = (props) => {

  const [value, setValue] = useState(false);

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
                    <h5 className='text-white text-center'>Mary Tolmes</h5>
                    <div className="px-4 mt-1">
                    </div>
          <div className="card-body text-white">
            Notifications
            <Switch isOn={value} handleToggle={()=> setValue(!value)} />
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
                            <span className = 'text-white'>Tommy Tolmes</span>
                        </div>
                        <div>
                            <button className="btn btn-light btn-sm">Edit</button>
                        </div>
                    </div>
    </div>
    </main>
  );
};

export default Profile;
