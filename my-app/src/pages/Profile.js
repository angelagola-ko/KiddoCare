const Profile = (props) => {
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12">
        {/* <img src="" alt="" class="image--cover" /> */}
        <div className="card">
          <h4 className="card-header">Profile Page</h4>
          <div className="card-body text-white">
            <input className="text-white" />
            <input className="text-white" />
            <label className="p-2" for="switch" type="checkbox" id="switch">
              Notifications
            </label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
