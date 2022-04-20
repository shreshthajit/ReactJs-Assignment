import "/home/shreshthajit/React_part2/my-app/src/component/Mainbody.css";
import Card from "@material-ui/core/Card";
import { IoIosArrowDown } from "react-icons/io";

import Filterpartone from "./Filterpartone";
import Filterparttwo from "./Filterparttwo";
import CardSection from "./RightSection/CardSection";
import { useState, useEffect } from "react";
import JsonData from "/home/shreshthajit/React_part2/my-app/src/component/RightSection/JsonData.json";
import Pagination from "./Pagination";

function Mainbody() {
  const [posts, setPosts] = useState(JsonData.data.hotels);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


  const [rating,setRating]=useState(null);

  // const filtereditems = JsonData.data.hotels.filter((element) => {
  //   return (
  //     element.starRating?.toLowerCase().indexOf(rating?.toLowerCase()) !== -1
  //   );
  // });

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(JsonData.data.hotels);
      setLoading(false);
    };
    fetchPosts();
  }, []);


   


  // useEffect(()=>{

  //     setLoading(true);
  //     setPosts(JsonData.data.hotels);
  //     setLoading(false);

  //  },[])

  //get current posts


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const [message, setMessage] = useState("Hello world");

   const newData = (data) => {
    setMessage(data);
  };

  const newRatingData=(data) =>{
     setRating(data);
  }



  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="main-section pt-2">
      <div className="container px-5">
        <div class="row">
          <div class="d-flex flex-row justify-content-between">
            <div class="py-3">
              <select class="selectpicker m-0 border-0 bg-light">
                <option>1500 of 7500 properties</option>
                <option>Ketchup</option>
                <option>Relish</option>
              </select>
            </div>
            <div class="py-3">
              <select class="selectpicker m-0 border-0 bg-light">
                <option>1500 of 7500 properties</option>
                <option>Ketchup</option>
                <option>Relish</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="row pt-4">
          <div className="col-lg-3 pt-2">
            <Filterpartone newRatingData={newRatingData}/>
            <Filterparttwo newData={newData} />
          </div>
          <div className="col-lg-9 pt-2">
            <CardSection
              posts={currentPosts}
              loading={loading}
              message={message}
              rating={rating}
            />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              handleNextbtn={handleNextbtn}
              handlePrevbtn={handlePrevbtn}
              currentPage={currentPage}
              maxPageNumberLimit={maxPageNumberLimit}
              minPageNumberLimit={minPageNumberLimit}
            ></Pagination>
          </div>
        </div>
      </div>{" "}
      props.newData(value);
    </div>
  );
}
export default Mainbody;
