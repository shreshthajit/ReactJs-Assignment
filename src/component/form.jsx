import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useState } from "react";

export const Form = () => {
  const [dateFrom, setDateFrom] = useState("Fri 17/09");
  const [dateFrom2, setDateFrom2] = useState("Sat 18/09");

  return (
    <div className="p-4">
      <div className="topForm d-flex">
        <select className="form-select top-form">
          <option selected>Return</option>
          <option>Go</option>
          <option>Come Back</option>
        </select>

        <select className="form-select top-form">
          <option selected>1 Adult</option>
          <option>2 Adult</option>
          <option>3 Adult</option>
          <option>4 Adult</option>
        </select>
        <select className="form-select top-form">
          <option selected>Economy</option>
          <option>Business</option>
          <option>First-class</option>
        </select>
      </div>

      <div className="bottom-form d-flex">
        <div className="form-control px-3 m-2 d-flex justify-content-between align-items-center"
          style={{ background: "#F9FAFD", width: "200px", height: "40px" }}
        >
          <p
            style={{ background: "#F2F8FE" }}
            className=" px-0  m-0"
          >
            <input  className="form-control rounded"
            style={{ background: "none", height: "30px", width: "150px" }}
            placeholder="San Francisco"
            />
          </p>
          <p style={{ cursor: "pointer" }} className="m-0 px-2">
            <AiOutlinePlus />
          </p>
        </div>

        <button
          className="btn btn-light border border-1 m-2 px-1 rounded"
          style={{ height: "40px",
          width: "40px" }}
        >
            <RiArrowLeftRightFill/>
          
        </button>

        <input
          className="form-control p-3 m-2 "
          style={{ cursor:"pointer", background: "#F9FAFD", height: "40px", width: "200px"  }}
          placeholder="To?"
        />

        <div
          className="p-3 m-2 border rounded d-flex align-items-center"
          style={{cursor:"pointer", background: "#F9FAFD", height: "40px", width: "200px" }}
        >
          <IoCalendarClearOutline />
          <input type="text"
            className="form-control shadow-none"
            style={{ border: "none", background: "transparent" }}
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>

        <div
          className="p-3 m-2 border rounded d-flex align-items-center"
          style={{cursor:"pointer", background: "#F9FAFD", height: "40px", width: "200px" }}
        >
          <IoCalendarClearOutline />
          <input
            type="text"
            className="form-control shadow-none"
            style={{ border: "none", background: "transparent" }}
            value={dateFrom2}
            onChange={(e) => setDateFrom2(e.target.value)}
          />
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>

        <button className="btn btn-primary m-2 px-3" style={{ width: "60px" }}>
          <BiSearch />
        </button>
      </div>
    </div>
  );
};