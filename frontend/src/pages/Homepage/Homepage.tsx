import Sidebar from "../../components/Sidebar/Sidebar";

import "./Homepage.css";

function Home() {
  return (
    <>
      <div className="homepage">
        <Sidebar />
        <div>
          <h1>Welcome to the Homepage</h1>
          {/* Add more content as needed */}
        </div>
      </div>
    </>
  );
}

export default Home;
