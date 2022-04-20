import Radiobutton from './Radiobutton';
import Subsubnavbar from './Subsubnavbar';
import '/home/shreshthajit/React_part2/my-app/src/component/Subnavbar.css';
// import BsPlus from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import {MdOutlineFlight} from "react-icons/md";
import {MdHotel} from "react-icons/md";
import {AiFillCar} from "react-icons/ai";
import {FiActivity} from "react-icons/fi";
import {AiOutlineUsergroupAdd} from "react-icons/ai";
import {GiEarthAsiaOceania} from "react-icons/gi";

function Subnavbar(props) {
  return (
    
    <div className="container px-5">
      <div className="d-flex flex-row justify-content-around bg-light">
        <ul className="nav py-2">
           <li className="px-lg-5">
              <a className="nav-link">
                <a className="nav d-flex justify-content-center" href="#">
                  <MdOutlineFlight size={28}/>
                </a>
                <p className='pt-3'>Flight</p>
              </a>
            </li>
            <li className="px-lg-5">
              <a className="nav-link">
                <a className="nav d-flex justify-content-center" href="#">
                <MdHotel size={28}/>
                </a>
                <p className='pt-3'>Hotels</p>
              </a>
            </li>
            <li className="px-lg-5">
              <a className="nav-link">
                <a className="nav d-flex justify-content-center" href="#">
                <AiFillCar size={28}/>
                </a>
                <p className='pt-3'>Car</p>
              </a>
            </li>
            <li className="px-lg-5">
              <a className="nav-link">
                <a className="nav d-flex justify-content-center" href="#">
                <FiActivity size={28}/>
                </a>
                <p className='pt-3'>Activities</p>
              </a>
            </li>
            <li className="px-lg-5">
              <a className="nav-link">
                <a className="nav d-flex justify-content-center" href="#">
                <AiOutlineUsergroupAdd size={28}/>
                </a>
                <p className='pt-3'>Group Travel</p>
              </a>
            </li>
            <li className="px-lg-5">
              <a className="nav-link">
                <a className="nav d-flex justify-content-center" href="#">
                <GiEarthAsiaOceania size={28}/>
                </a>
                <p className='pt-3'>Sea Travel</p>
              </a>
            </li>
        </ul>
      </div>
      <Radiobutton/>
      <Subsubnavbar/>
    </div>
  );
}

export default Subnavbar;
