// import "bootstrap/dist/css/bootstrap.min.css";
import settings from "/home/shreshthajit/React_part2/my-app/src/assets/images/settings.png";
import carrier from "/home/shreshthajit/React_part2/my-app/src/assets/images/carrier.png";
import Vector_love from "/home/shreshthajit/React_part2/my-app/src/assets/images/Vector_love.png";
import girl from "/home/shreshthajit/React_part2/my-app/src/assets/images/girl.png";

function Navbar() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-white static-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h2 class="text-dark">Logo</h2>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link text-black" href="#">
                    <img src={girl} alt="nothing" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black" href="#">
                    <img src={settings} alt="nothing" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black" href="#">
                    <img src={carrier} alt="nothing" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black" href="#">
                    <img src={Vector_love} alt="nothing" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
       
    </div>
  );
}
export default Navbar;
