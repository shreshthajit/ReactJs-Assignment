// import StarRatings from "./react-star-ratings";
import {React,useCallback,useState} from "react";

import map_image from "/home/shreshthajit/React_part2/my-app/src/assets/images/map_image.jpg";
import { IoIosArrowUp } from "react-icons/io";
import dollar from  '/home/shreshthajit/React_part2/my-app/src/assets/images/dollar.png';
import {FaStar} from 'react-icons/fa';
import   "/home/shreshthajit/React_part2/my-app/src/component/Filterpartone.css";

function Filterpartone(props) {

  const [rating,setRating]=useState(null);
  const [hover,setHover]=useState(null);

   const ratingChange =  useCallback( 
    (event) => {
      setRating(event.target.value);
      props.newRatingData(event.target.value);
   },[setRating,props])///here useCallback  hook will help to store the previous state of this 
   //function without re-rendering everytime.

    


  return(
    <div>
      <div class="card">
        <img src={map_image} className="mp-image" alt="nothing" />
      </div>
      <hr />
      <div>
        <div class="d-flex flex-row bd-highlight justify-content-between">
          <div class="p-2 bd-highlight">
            <div class="d-flex flex-column bd-highlight">
              <div class="bd-highlight">
                <strong>Recomended filters</strong>
              </div>
              <div class="bd-highlight">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Free breakfast
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <IoIosArrowUp />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div class="bd-highlight pb-2">
          <strong>Hotel class</strong>
        </div>
        <div className="star-input">
          
          {[...Array(5)].map((star,i)=>{
            const ratingValue=i+1;
            return(
              <label>
                <input 
                type="radio"
                name="rating"
                value={ratingValue}
                onChange={ratingChange}
                />  
                 
                <FaStar 
                className="star"
                color={ratingValue<=(hover || rating)? "#ffc107" : "#e4e5e9"}

                size={30}
                // onMouseEnter={()=>setHover(ratingValue)}
                // onMouseLeave={()=>setHover(null)}
                />
              </label>
            );
          })}
           
        </div>
      </div>
      <hr/>
      <div>
        <div class="d-flex flex-column bd-highlight">
          <div class="d-flex flex-row bd-highlight justify-content-between">
            <div class="bd-highlight">
              <strong>
                {" "}
                <p>price</p>
              </strong>
            </div>
            <div class="bd-highlight">
              <IoIosArrowUp/>
            </div>
          </div>
          <div class="d-flex flex-row bd-highlight justify-content-between">
            <label for="customRange2" class="form-label"></label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="100"
              id="customRange2"
            />
          </div>
          <div class="d-flex flex-row bd-highlight justify-content-between">
            <div>
              <img src={dollar} class="px-2 " alt="nothing" />
            </div>
          </div>
          <div class="row px-2 ">
            <div class="row gx-3 pt-1 ">
              <div class="col ">
                <div class="border border-dark ">
                  <div class="d-flex flex-row bd-highlight justify-content-between ">
                    <div class="p-3 ps-1 bd-highlight w-100 ">
                      <select class="selectpicker m-0 border-0 bg-light w-100 ">
                        <option>
                          Nightly base price
                        </option>
                        <option>Ketchup</option>
                        <option>Relish</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}
export default Filterpartone;
