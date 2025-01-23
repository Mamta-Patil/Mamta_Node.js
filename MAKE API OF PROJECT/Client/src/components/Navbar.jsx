import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";
import axios from "axios";
// import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  // const {name}= JSON.parse(localStorage.getItem("userData"))
  // const { user, logout } = useContext(AuthContext); 
  // const {logout}= useContext(AuthContext)
// console.log(name)

// logout user
const logoutUser=()=>{
  axios.get("http://localhost:8080/logout")
  .then((res)=>{
    alert("logot successfully")
  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand font-weight-bold">
          Home
        </Link>

        <Link to="/about" className="navbar-brand font-weight-bold">
          About
        </Link>


        <Link to="/getalluser" className="navbar-brand font-weight-bold">
          User
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&s"
                  alt="user"
                  className="rounded-circle"
                  width="30"
                  height="30"
                />
                {name?name:""}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userDropdown"
              >
                <li className="dropdown-header">@username</li>
                <li>
                  <Link to="/dashboard?tab=profile" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>  
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item">Sign out</button>
                </li> </ul>
            </li>

            <li className="nav-item">
              <Link to="/sign-in" className="btn btn-outline-primary">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
                <button className="btn btn-sm ms-2" onClick={()=>logoutUser()}>
                  Logout
                </button>
              </li>


            <li>
              <Link>
              {/* {name?name:""} */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}