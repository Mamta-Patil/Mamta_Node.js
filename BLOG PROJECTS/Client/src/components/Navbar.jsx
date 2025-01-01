import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

export default function Navbar() {
  const [notesdata, setNotesdata] = useState([])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">

        <Link to="/" className="navbar-brand font-weight-bold">
          Home
        </Link>

        <Link to="/getallblogs" className="navbar-brand font-weight-bold">
          Notes
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
          <div className="d-flex ms-auto">

            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            /> */}
            
{/* 
            <Link>
              {name ? name : ""}
            </Link> */}

          </div>

          <ul className="navbar-nav ms-auto align-items-center gap-2">

            <button>
              <Link to={"/create"}>
                create note
              </Link>
            </button>

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
{/* 
            <li className="nav-item">
              <Link to="/sign-in" className="btn btn-outline-primary">
                Sign In
              </Link>
            </li> */}

            <li>
            </li>

          </ul>
        </div>

        {/* {
          role === "admin" ? (
            <div className="admin-acees">
              <button onClick={getAllNotes}>
                <Link to={"/getallnotes"}>
                Get All Notes
                </Link>
                </button>
              <button onClick={handlleDelete}>Delete All Notes</button>
            </div>
          ) : ("")
        } */}

      </div>
    </nav>
  );

}