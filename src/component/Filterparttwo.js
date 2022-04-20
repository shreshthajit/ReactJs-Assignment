import { useEffect, useReducer } from "react";
import { React, useState } from "react";

const FreeBiesData = [
  {
    id: 1,
    option: "Burger",
    isChecked: false,
  },
  {
    id: 2,
    option: "sandwich",
    isChecked: false,
  },
  {
    id: 3,
    option: "bread",
    isChecked: false,
  },
  {
    id: 4,
    option: "steak",
    isChecked: false,
  },
  {
    id: 5,
    option: "fish",
    isChecked: false,
  },
];

const Filterparttwo = (props) => {
  const [users, setUsers] = useState([]);
  // console.log(props);

  useEffect(() => {
    setUsers(FreeBiesData);
  }, []);

  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    const { value, checked } = event.target;
    setUsername(event.target.value);

    if (checked)
     props.newData(value);
    else props.newData("");

    //console.log(value);
  };

  return (
    <div>
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight">
          <strong>Freebies</strong>
        </div>
        <div>
          <div class="p-1 bd-highlight">
            <div class="form-check">
              {users.map((item, index) => (
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="check"
                    value={item.option}
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    {item.option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div class="row ">
            <div class="col-lg-8 ">
              <p class="text-secondary ">
                Only show stays with enhanced health
              </p>
            </div>
            <div class="col-lg-4 ">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckDefault"
                ></label>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p>
            <strong>Property Name</strong>
          </p>
        </div>
        <hr />
        <div>
          <div class="d-flex flex-column bd-highlight">
            <div class="d-flex flex-row bd-highlight">
              <div class="p-1 bd-highlight">
                <p>
                  <strong>Freebies</strong>
                </p>
              </div>
            </div>
            <div class="d-flex flex-row bd-highlight justify-content-between">
              <div class="p-1 bd-highlight">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    24hr front desk
                  </label>
                </div>
              </div>
              <div class="p-1 bd-highlight">435</div>
            </div>
            <div class="d-flex flex-row bd-highlight justify-content-between">
              <div class="p-1 bd-highlight">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    24hr front desk
                  </label>
                </div>
              </div>
              <div class="p-1 bd-highlight">435</div>
            </div>
            <div class="d-flex flex-row bd-highlight justify-content-between">
              <div class="p-1 bd-highlight">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    24hr front desk
                  </label>
                </div>
              </div>
              <div class="p-1 bd-highlight">435</div>
            </div>
            <div class="d-flex flex-row bd-highlight justify-content-between">
              <div class="p-1 bd-highlight">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    24hr front desk
                  </label>
                </div>
              </div>
              <div class="p-1 bd-highlight">435</div>
            </div>
            <div class="d-flex flex-row bd-highlight justify-content-between">
              <div class="p-1 bd-highlight">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    24hr front desk
                  </label>
                </div>
              </div>
              <div class="p-1 bd-highlight">435</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filterparttwo;
