import { ItemCard } from "./itemcard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ItemCards = () => {
  return (
    <div className="border-top p-5" style={{ background: "#F7FBFF" }}>
      <div className="d-flex justify-content-between mb-4 align-items-end">
        <div>
          <h2 style={{ color: "#344050" }} className="mb-4">
            Countries you can travel right now
          </h2>
          <h5 style={{ color: "#6D7C8F" }}>
            Popular destinations open to visitors from your country
          </h5>
        </div>
        <div>
          <button className="btn btn-outline-primary me-5">See all</button>
        </div>
      </div>

      <div className="d-flex" >
        <ItemCard
          topBadge="Open"
          eventName="Delhi Events 2022"
          description="A small description"
          importance="Important"
          //image="https://images.unsplash.com/photo-1609670289875-590e8ec05c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYXl1biUyMHRvbWJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          image="https://static.toiimg.com/photo/msid-64957021,width-96,height-65.cms"
        />
        <ItemCard
          topBadge="Restrictions"
          eventName="Top Places to visit in Maldives"
          description="A small description"
          importance="Important"
          image="https://i.pinimg.com/originals/69/a9/03/69a903b2cf045051155a02242419d38e.jpg"
        />
        <ItemCard
          topBadge="Covid Travel updates"
          eventName="Option without description goes here"
          importance="2 mins read"
          image="https://pix10.agoda.net/hotelImages/148966/-1/e03364349806630103c80947ad03bb65.jpg?s=1024x768"
        />
        <ItemCard
          topBadge="Open"
          eventName="Delhi Events 2022"
          description="A small description"
          importance="2 mins read"
          image="https://static.wixstatic.com/media/nsplsh_626f79585a667170777055~mv2_d_5379_3585_s_4_2.jpg/v1/fill/w_602,h_480,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Simon%20Matzinger.webp"
        />
      </div>
  
      <div className="d-flex flex-row-reverse mb-4 align-items-end">
            <button
            className="btn btn-light border border-1 m-2 px-0 me-6 rounded"
            style={{ height: "35px", width: "35px" }}
            >
                <IoIosArrowForward/>
            </button>
            <button
            className="btn btn-light border border-1 m-2 px-0  rounded"
            style={{ height: "35px", width: "35px" }}
            >
                <IoIosArrowBack/>
            </button>
         </div>

    </div>
  );
};