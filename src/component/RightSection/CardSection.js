import Card from "@material-ui/core/Card";
import "/home/shreshthajit/React_part2/my-app/src/component/RightSection/CardSection.css";
import { MdAddBox } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
// import Data from "./MenuData";
import { useState, useEffect } from "react";
// import ShowJsonData from "./ShowJsonData";
import JsonData from "./JsonData.json";
import {FaStar} from 'react-icons/fa';

function CardSection({ posts, loading,rating }) {
  const [items, setItems] = useState(posts);

  // const filterItem = (categItem) => {
  //   const updatedItems = Data.filter((curElement) => {
  //     return curElement.text1 === categItem;
  //   });
  //   setItems(updatedItems);
  // };
  useEffect(() => {
    setItems(posts);
  }, [posts]); //we have to add this dependency because if posts is true then the next data will print



  // const filtereditems = JsonData.data.hotels.filter((element) => {
  //   return (
  //     element.starRating?.toLowerCase().indexOf(rating?.toLowerCase()) !== -1
  //   );
  // });
  // (filtereditems.length>0?filtereditems:items).


  
  console.log(rating);
  if (loading) {
    return <p>loading....</p>;
  }
  return (
    <div>
      <div>
        {items.map((ele, index) => {
          return (
            <div class="py-2">
              <Card>
                <div class="content">
                  <div class="row wrap no-gutters">
                    <div class="col-md-3 col-sm-12  py-2">
                      <card-header>
                        <picture class="px-2">
                          <img
                            src={ele.heroImage}
                            width="192"
                            height="170"
                            alt="Photo"
                          />
                        </picture>
                      </card-header>
                    </div>
                    <div class="col-md-5 col-sm-12">
                      <div class="d-flex flex-column">
                        <div class="pt-2">
                          <ul className="ps-0">
                            <strong>{ele.name}</strong>
                            <p class="text-secondary ">{ele.address.line1}</p>
                            <li>
                              {[...Array(ele.starRating)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                  <label>
                                    <FaStar
                                      className="star"  
                                      color={"#ffc107"}
                                      size={21}
                                      // onMouseEnter={()=>setHover(ratingValue)}
                                      // onMouseLeave={()=>setHover(null)}
                                    />
                                  </label>
                                );
                              })}
                            </li>
                          </ul>
                        </div>
                        <div class="p-2">
                          <div class="d-flex flex-row ">
                            <p className="pt-5">
                              <MdAddBox />
                            </p>
                            <div class="pt-5">
                              <ul className="ps-1">
                                <li>
                                  <p class="text-secondary">Add to compare</p>
                                </li>
                              </ul>
                            </div>
                            <vr></vr>
                            <p className="ps-2 pt-5">
                              <FaMapMarkerAlt />
                            </p>
                            <div class="pt-5 ">
                              <ul className="ps-1">
                                <li>
                                  <p class="text-secondary ">show on map</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 ">
                      <div class="d-flex flex-column justify-content-end ">
                        <div class="pt-2 ">
                          <ul class="text-end pe-2">
                            <li>
                              <strong>{ele.baseRate}</strong>
                            </li>
                            <li class="text-secondary ">base rate</li>
                            <li class="text-secondary ">
                              Total rate: {ele.totalRate}
                            </li>
                            <li>
                              <p class="text-secondary">
                                Inclusive taxes and fees
                              </p>
                            </li>
                            <li class="pt-5">
                              <button
                                type="button"
                                class="btn btn-primary text-white"
                              >
                                Select
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardSection;
