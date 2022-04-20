import { MdLocationOn } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import "/home/shreshthajit/React_part2/my-app/src/component/Subsubnavbar.css";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FcSearch } from "react-icons/fc";
import JsonData from "/home/shreshthajit/React_part2/my-app/src/component/RightSection/JsonData.json";
import { AiOutlineClose } from "react-icons/ai";

function Subsubnavbar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    
    const newFilter = JsonData.data.hotels.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    // if (searchWord === "") {
    //   setFilteredData([]);
    // } else {
    //   setFilteredData(newFilter);
    // }
    setFilteredData(newFilter);
   };

  const handleClick=(event) => {
    setWordEntered(event.target.innerText);
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const [childCounter, setChildtCounter] = useState(0);

  const [room, setRoom] = useState([1]);
  const [totalGuest, setTotalGuest] = useState([0]);
  const [totalRoom, setTotalRoom] = useState([0]);

  ///here starts the new  code
  const [id, setId] = useState(0);
  const [countersData, setCountersData] = useState([
    { adultCount: 0, childCount: 0, childArray: [], id: 1 },
  ]);
  const [childAge, setChildAge] = useState([]);

  const generateId = () => {
    setId(id + 1);
    return id;
  };

  // const updateCounter = (id, str, updateFunction) => {
  //   // console.log(id);
  //   const updatedCounters = countersData.map((data) => {
  //     if (data.id !== id) return data;

  //     if (str === "adult")
  //       return { ...data, adultCount: updateFunction(data.adultCount) };
  //     else return { ...data, childCount: updateFunction(data.childCount) };
  //   });
  //   setCountersData(updatedCounters);
  // };

  const updateAdultCounter = (id, updateFunction) => {
    // console.log(id);
    const updatedCounters = countersData.map((data) => {
      if (data.id !== id) return data; ///this iteration is working in a different way.

      return { ...data, adultCount: updateFunction(data.adultCount) };
    });
    setCountersData(updatedCounters);
  };

  const updateChildCounter = (id, str, updateFunction) => {
    // console.log(id);
    const updatedCounters = countersData.map((data) => {
      if (data.id !== id) return data; //this iteration is working like a map and for every iteration it is returning a value depending on the given condition.

      if (str === "increment") {
        const newData = updateFunction(data.childCount);
        if (data.childArray.length < 4) data.childArray.push(newData);
        if (data.childCount < 4)
          return { ...data, childCount: updateFunction(data.childCount) };
        else return data;
      } else {
        // const newData = updateFunction(data.childCount);
        const newData = data.childArray.slice(0, data.childArray.length - 1);

        if (data.childArray.length <= 4) data.childArray = newData;
        if (data.childCount <= 4)
          return { ...data, childCount: updateFunction(data.childCount) };
        else return data;
        // setRoom(room.slice(0, room.length - 1));
      }
    });
    setCountersData(updatedCounters);
  };

  const incrementAdult = (id) => {
    updateAdultCounter(id, (adultCount) => adultCount + 1);
    setTotalGuest(totalGuest + 1);
  };

  const decrementAdult = (id) => {
    updateAdultCounter(id, (adultCount) => adultCount - 1);
    setTotalGuest(totalGuest - 1);
  };
  const incrementChild = (id) => {
    updateChildCounter(id, "increment", (childCount) => childCount + 1);
    setChildAge(childAge.concat(childAge[childAge.length] + 1));
    setTotalGuest(totalGuest + 1);
  };

  const decrementChild = (id) => {
    updateChildCounter(id, "decrement", (childCount) => childCount - 1);
    setTotalGuest(totalGuest - 1);
  };
  const addCounter = (event) => {
    setCountersData([
      ...countersData,
      {
        adultCount: 0,
        childCount: 0,
        childArray: [],
        id: generateId(),
      },
    ]);
  };

  const removeCountersData = (id) => {
    var array = [...countersData];
    array.splice(id, 1);
    setCountersData(array);
  };

  const [placeHolderValue,setPlaceHolderValue]=useState("Search something...")

  const plhlderChange=((event)=>{

    setPlaceHolderValue(event.target.value);
  })

  // const AdultIncrement = (e) => {
  //   setAdultCounter(adultCounter + 1);
  // };

  // const AdultDecrement = () => {
  //   if (adultCounter > 1) {
  //     setAdultCounter(adultCounter - 1);
  //   }
  // };

  // return (
  //   <div>
  //     <div class="container pb-4">
  //       <div className="d-flex flex-row bd-highlight mb-3">
  //         <div class="item item-1 pt-3 d-none d-md-block shadow-sm">
  //           <div class="d-flex flex-row bd-highlight">
  //             <div class="bd-highlight">
  //               <MdLocationOn />
  //             </div>
  //             <div class="bd-highlight">
  //               <div class="freehand d-flex flex-row bd-highlight">
  //                 <div class="bd-highlight">
  //                   <p class="d-flex text-start">Freehand new work</p>
  //                 </div>
  //                 <div class="bd-highlight ps-3">
  //                   <IoMdClose />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <div class="item item-2 d-none d-md-block shadow-sm">
  //           <div class="d-flex flex-row bd-highlight justify-content-center">
  //             <div class="d-flex flex-row bd-highlight">
  //               <div class="bd-highlight pe-2">
  //                 <MdLocationOn />
  //               </div>
  //               <div class="bd-highlight pe-3">Dec 15,21</div>
  //             </div>
  //             <div class="vr bd-highlight"></div>

  //             <div class="d-flex flex-row bd-highlight">
  //               <div class="bd-highlight ps-2">
  //                 <MdLocationOn />
  //               </div>
  //               <div class="bd-highlight">Dec 16,21</div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* <div class="item item-3 d-none d-md-block shadow-sm">

  //       </div> */}
  //         <div class="item item-3 d-none border border-secondary d-md-block shadow-sm">
  //           <div class="row">
  //             <div class="col-12 col-md-10">
  //               <div className="nav-item dropdown">
  //                 <a
  //                   className="nav-link dropdown"
  //                   href="#"
  //                   id="navbarDropdown"
  //                   role="button"
  //                   data-bs-toggle="dropdown"
  //                   aria-expanded="false"
  //                 >
  //                   <BsFillPersonFill size={20} /> {adultCounter + childCounter}{" "}
  //                   guest, {roomCounter} room
  //                 </a>
  //                 <ul
  //                   className="dropdown-menu"
  //                   aria-labelledby="navbarDropdown"
  //                 >
  //                   {/* <li class="row px-3 my-3">
  //                               <div class="col-4">Rooms</div>
  //                               <div class="col-8 text-end">
  //                                   <button onClick={RoomIncrement} class="counterButton p-0 rounded-2"><BsPlus size={29} className="pb-2 pe-2"/></button>
  //                                   <span class="px-2">{roomCounter}</span>
  //                                   <button onClick={RoomDecrement}  class="counterButton p-0 rounded-2"><AiOutlineMinus size={21}  className="pb-2"/></button>
  //                               </div>
  //                           </li>
  //                           <li class="row px-3 my-3">

  //                               <div class="col-4">Adults</div>
  //                               <div class="col-8 text-end">
  //                                   <button onClick={AdultIncrement} class="counterButton p-0 rounded-2"><BsPlus size={29} className="pb-2 pe-2"/></button>
  //                                   <span class="px-2 ">{adultCounter}</span>
  //                                   <button onClick={AdultDecrement} class="counterButton p-0 rounded-2"><AiOutlineMinus size={21}  className="pb-2"/></button>
  //                               </div>
  //                           </li>
  //                           <li class="row px-3 my-3">
  //                               <div class="col-4">Children</div>
  //                               <div class="col-8 text-end">
  //                                   <button onClick={ChildIncrement} class="counterButton p-0 rounded-2"><BsPlus size={29} className="pb-2 pe-2"/></button>
  //                                   <span class="px-2 ">{childCounter}</span>
  //                                   <button onClick={ChildDecrement} class="counterButton p-0 rounded-2"><AiOutlineMinus size={21}  className="pb-2"/></button>
  //                               </div>
  //                           </li> */}

  //                   {room.map((c,index) => {
  //                     return (
  //                       <div>
  //                         <li class=" px-3 my-3">
  //                         <h6 class="">Room {index+1}</h6>
  //                         <div class="">
  //                           {/* <span class="px-2">{roomCounter}</span> */}
  //                           {/* <button onClick={RoomDecrement}  class="counterButton p-0 rounded-2"><AiOutlineMinus size={21}  className="pb-2"/></button> */}
  //                         </div>
  //                         <div class="">
  //                           <h6 class="">Adults</h6>
  //                           <button
  //                             onClick={AdultIncrement}
  //                             class="counterButton p-0 rounded-2"
  //                           >
  //                             <BsPlus size={21} className="pb-2 pe-2" />
  //                           </button>
  //                           <span class="px-2 ">{adultCounter}</span>
  //                           <button
  //                             onClick={AdultDecrement}
  //                             class="counterButton p-0 rounded-2"
  //                           >
  //                             <AiOutlineMinus size={21} className="pb-2" />
  //                           </button>
  //                         </div>
  //                         <div class="">
  //                           <h6 class="">Children</h6>
  //                           <button
  //                             onClick={ChildIncrement}
  //                             class="counterButton p-0 rounded-2"
  //                           >
  //                             <BsPlus size={21} className="pb-2 pe-2" />
  //                           </button>
  //                           <span class="px-2 ">{childCounter}</span>
  //                           <button
  //                             onClick={ChildDecrement}
  //                             class="counterButton p-0 rounded-2"
  //                           >
  //                             <AiOutlineMinus size={21} className="pb-2" />
  //                           </button>
  //                         </div>

  //                       </li>
  //                       <hr/>
  //                       </div>

  //                     );
  //                   })}

  //                   <button
  //                     onClick={RoomIncrement}
  //                     class="addButton p-0 mx-3 rounded-2"
  //                   >
  //                     Add another room
  //                   </button>
  //                   <button
  //                     onClick={RoomDecrement}
  //                     class="addButton p-0 mx-3 rounded-2"
  //                   >
  //                     Remove
  //                   </button>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <div class=" item item-4 d-none d-md-block shadow-sm bg-primary">
  //           <button
  //             class="col-12 col-md-2 b btn btn-outline-primary text-center"
  //             type="submit"
  //           >
  //             <BiSearch size={25} />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="container ">
      <div class="row  height d-flex align-items-center my-4">
        <div class="col-12 col-md-4  border border-1  align-items-center">
          <div className="container  d-flex justify-content-center align-items-center p-1">
            <input
              type="text"
              value={wordEntered}
              placeholder="Search something"
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <FcSearch size={28} />
              ) : (
                <AiOutlineClose id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
          {filteredData.length !== 0 && (
              <div className="dataResult">
                {filteredData.slice(0, 15).map((items,index) => {
                  return (
                    <a className="dataItem" onClick={handleClick} value={items.name}   target="_blank">
                     <p>{items.name}</p>
                    </a>
                  );
                })}
              </div>
        )}
        </div>
        <div class=" date-box col-12 col-md-5 px-1 ps-3">
          <div class="date gap-4 border border-1 rounded d-flex justify-content-center align-items-center p-2">
            <i class="bi bi-geo-alt"></i>
            <h6 class="m-0">Dec 15, 21</h6>
            <div class="vr my-2 border border-dark"></div>
            <i class="bi bi-geo-alt"></i>
            <h6 class="m-0">Dec 15, 21</h6>
          </div>
        </div>
        <div class="col-md-3 ps-3">
          <div class="row">
            <div class="col-12 col-md-10 shadow-sm">
              <div className="nav-item dropdown  border border-1 rounded-2 py-1">
                <a
                  className="nav-link dropdown text-black"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <BsFillPersonFill size={20} /> {adultCounter + childCounter}{" "}
                guest, {roomCounter} room */}
                  <BsFillPersonFill size={20} />
                  guest, room
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <li class="row px-3 my-3">
                              <div class="col-4">Rooms</div>
                              <div class="col-8 text-end">
                                  <button onClick={RoomIncrement} class="counterButton p-0 rounded-2"><BsPlus size={29} className="pb-2 pe-2"/></button>
                                  <span class="px-2">{roomCounter}</span>
                                  <button onClick={RoomDecrement}  class="counterButton p-0 rounded-2"><AiOutlineMinus size={21}  className="pb-2"/></button>
                              </div>
                          </li>
                          <li class="row px-3 my-3">
                              
                              <div class="col-4">Adults</div>
                              <div class="col-8 text-end">
                                  <button onClick={AdultIncrement} class="counterButton p-0 rounded-2"><BsPlus size={29} className="pb-2 pe-2"/></button>
                                  <span class="px-2 ">{adultCounter}</span>
                                  <button onClick={AdultDecrement} class="counterButton p-0 rounded-2"><AiOutlineMinus size={21}  className="pb-2"/></button>
                              </div>
                          </li>
                          <li class="row px-3 my-3">
                              <div class="col-4">Children</div>
                              <div class="col-8 text-end">
                                  <button onClick={ChildIncrement} class="counterButton p-0 rounded-2"><BsPlus size={29} className="pb-2 pe-2"/></button>
                                  <span class="px-2 ">{childCounter}</span>
                                  <button onClick={ChildDecrement} class="counterButton p-0 rounded-2"><AiOutlineMinus size={21}  className="pb-2"/></button>
                              </div>
                          </li> */}
                  {countersData.map((c, index) => {
                    return (
                      <div>
                        <li class="px-3 my-3">
                          <div class="room">
                            <div className="row">
                              <div className="col-md-6 pe-5">
                                <h6 class="">Room {index + 1}</h6>
                              </div>
                              <div className="col-md-6">
                                <button
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    removeCountersData(index);
                                  }}
                                  class="addButton p-0 mx-3 rounded-2"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div class="adult">
                            <div className="row">
                              <div className="col-md-6 pe-5">
                                <h6 class="">Adults</h6>
                              </div>
                              <div className="col-md-6">
                                <button
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    incrementAdult(c.id);
                                  }}
                                  id={c.id}
                                  class="counterButton p-0 rounded-2"
                                >
                                  <BsPlus size={21} className="pb-2 pe-2" />
                                </button>
                                <span class="px-2 ">{c.adultCount}</span>
                                <button
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    decrementAdult(c.id);
                                  }}
                                  class="counterButton p-0 rounded-2"
                                >
                                  <AiOutlineMinus size={21} className="pb-2" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div class="children">
                            <div className="row">
                              <div className="col-md-6 pe-5">
                                <h6 class="">Children</h6>
                              </div>
                              <div className="col-md-6">
                                <button
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    incrementChild(c.id);
                                  }}
                                  class="counterButton p-0 rounded-2"
                                >
                                  <BsPlus size={21} className="pb-2 pe-2" />
                                </button>
                                <span class="px-2 ">{c.childCount}</span>
                                <button
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    decrementChild(c.id);
                                  }}
                                  class="counterButton p-0 rounded-2"
                                >
                                  <AiOutlineMinus size={21} className="pb-2" />
                                </button>
                              </div>
                            </div>
                            <div className="row pt-3">
                              {c.childArray.map((child, index) => {
                                return (
                                  <div className="col-md-3">
                                    <h6>Child{index + 1}</h6>
                                    <div class="">
                                      <select
                                        class="custom-select pe-2"
                                        id="inputGroupSelect02"
                                      >
                                        <option selected>2</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                        <option value="3">6</option>
                                      </select>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </li>
                        <hr />
                      </div>
                    );
                  })}

                  <div>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        addCounter();
                      }}
                      class="addButton p-0 mx-3 rounded-2"
                    >
                      <IoIosAddCircleOutline size={21} />
                      Add another room
                    </button>
                  </div>
                </ul>
              </div>
            </div>
            <button
              class="col-12 col-md-2 b btn btn-outline-secondary border border-1 text-center"
              type="submit"
            >
              <BiSearch size={25} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Subsubnavbar;
