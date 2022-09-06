const Profile = (props) => {
  return (
    <main className="flex-row justify-center mb-4">
      <body className="col-12">
        <img src="" alt="" class="image--cover" />
        <div className="card">
          <h4 className="card-header ">Profile Page</h4>
          <div className="card-body text-white">
            <label className="p-2" for="switch">
              Notifications
            </label>
            <input type="checkbox" id="switch" />
          </div>
        </div>
      </body>
    </main>
  );
};

export default Profile;
