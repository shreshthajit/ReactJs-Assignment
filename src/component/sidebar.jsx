import {IoMenuOutline } from "react-icons/io5";
import {FaDirections} from "react-icons/fa";
import {GiDirectionSigns} from "react-icons/gi";
import {GiCommercialAirplane} from "react-icons/gi";
import {RiHome5Fill} from "react-icons/ri";
import {RiPoliceCarFill} from "react-icons/ri";
import {IoMdListBox} from "react-icons/io";
import {RiSuitcase2Fill} from "react-icons/ri";
import {IoGitBranchOutline} from "react-icons/io5";
import {RiMoneyDollarBoxFill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";

import { SideItem } from "./sideItem";


export const Sidebar = () => {
    return(
        <div className="sidebar col-2" style={{ background: ""}}>

          <div className="a mx-2 p-2 pt-0" style={{fontSize: "30px",  borderBottom: "2px solid #F1F6F9", cursor: "pointer"}}>
              <IoMenuOutline/>
          </div>

          <div className="d-flex align-items-center mx-2 p-2" style={{ borderBottom: "2px solid #F1F6F9"}}>
            <div>
                <img
                 src="https://www3.pictures.zimbio.com/gi/Jenny+Packham+Front+Row+Spring+2013+Mercedes+Y1Fo8sPtqhTx.jpg"
                  className="rounded-circle"
                  style={{ objectFit: "cover" }}
                  alt="amanda victor"
                  width="30px"
                  height="30px"
                />
            </div>
            <span className="px-2">Amanda victor</span>
          </div>
     


          <div className="c mx-2 p-2 pt-0" style={{ borderBottom: "2px solid #F1F6F9"}}>
           <SideItem name="Flights" logo={GiCommercialAirplane}/>
           <SideItem name="Stays" logo={RiHome5Fill}/>
           <SideItem name="Car Rental" logo={RiPoliceCarFill}/>
           <SideItem name="Things to do" logo={IoMdListBox}/>
           <SideItem name="Flights + hotel" logo={RiSuitcase2Fill}/>
          </div>

          
      <div className="mx-2 p-2" style={{ borderBottom: "2px solid #F1F6F9" }}>
           <SideItem name="Explore" logo={GiDirectionSigns}/>
           <SideItem name="Deals" logo={RiMoneyDollarBoxFill}/>
           <SideItem name="Routes" logo={FaDirections}/>
           <SideItem name="Direct" logo={IoGitBranchOutline}/>
      </div>

      <div className="mx-2 p-2">
      <SideItem name="Trips" logo={FaBook} />
      </div>

        </div> 
    );
};