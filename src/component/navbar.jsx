 import {FiLogOut} from "react-icons/fi";
import {IoMdListBox} from "react-icons/io";
import {IoMdHeart} from "react-icons/io";
import { SideItem } from "../component/sideItem";
import {GiCommercialAirplane} from "react-icons/gi";
import {RiHome5Fill} from "react-icons/ri";

 export const Navbar = () => {
    return(
        <div className="navbar p-3">
             <div className="container-fluid">
                 <b className="navbar-brand font-weight-bold" style={{color: "#5C6D81"}}>
                     <h2 style={{ color: "#344050" }}>Logo</h2>
                 </b>


                <div className="d-flex align-items-center">

                    <div className="d-flex align-items-center pe-2 border-end border-2">
                        <span className="me-1" style={{cursor:"pointer"}}>Business</span>
                        <span className="badge rounded-pill text-light" style={{cursor:"pointer", backgroundColor: "#5D6E82"}}>
                            New
                        </span>
                    </div>


                    <span className="px-2" style={{cursor:"pointer"}} href="#">Trips</span>
                    <span className="px-3 " style={{cursor:"pointer"}}><IoMdHeart/></span>

                    <div style={{cursor: "pointer", color: "red"}}>
                        <FiLogOut className="mx-2"/>Logout
                    </div>
                    
                    <a className="btn btn-light dropdown-toggle ms-3" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" className="img-fluid rounded me-2" style={{height: "20px", width:"30px"}} alt=""/>
                    </a>
                </div>
             </div>
        </div> 
    );
};

 