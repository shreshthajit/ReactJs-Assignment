import "./App.css";
import plane from "/home/shreshthajit/React_part2/my-app/src/assets/images/plane.png";
import Navbar from "./component/Navbar";
import Subnavbar from "./component/Subnavbar";
import Flight from "/home/shreshthajit/React_part2/my-app/src/assets/images/plane.png";
import Mainbody from "./component/Mainbody";
import { FaMapMarkerAlt } from "react-icons/fa";

function App() {
  const data = [
    {
      num: 1,
      image1: "<FaMapMarkerAlt/>",
      text: "Flight",
    },
    {
      num: 2,
      image1: "<FaMapMarkerAlt/>",
      text: "Hotels",
    },
    {
      num: 3,
      image1: "<FaMapMarkerAlt/>",
      text: "Car",
    },
    {
      num: 4,
      image1: "<FaMapMarkerAlt/>",
      text: "Activities",
    },
    {
      num: 5,
      image1: "<FaMapMarkerAlt/>",
      text: "Group Travel",
    },
    {
      num: 6,
      image1: "<FaMapMarkerAlt/>",
      text: "Sea Travel",
    },
  ];

  return (
    <div>
      <div class="dropdown">
        
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
      <Navbar/>
      <Subnavbar items={data} />
      <Mainbody />
    </div>
  );
}

export default App;
