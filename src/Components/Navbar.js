import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className='App'>
        <div className="top">
          <div className='top-logo'>
          <i class="fa-regular fa-bell"></i>
        <i class="fa-regular fa-user"></i>
          </div>
        
          <div className="left">
            <Link to="/">
            <div className="icon">
              <i class="fa-solid fa-house"></i>
              Home
            </div>
            </Link>
            <Link to="/library">
            <div className="icon">
              <i class="fa-solid fa-book-open"></i>
              Library
            </div>
            </Link>
            <Link to="/assessment">
            <div className="icon">
              <i class="fa-solid fa-file-pen"></i>
              Assessment
            </div>
            </Link>
            <div className="icon">
              <i class="fa-solid fa-file-import"></i>
              Report
            </div>
            <div className="icon">
              <i class="fa-solid fa-comments"></i>
              Chats
            </div>
            <div className="icon">
              <i class="fa-solid fa-users"></i>
              <div>
                User
              </div>
              <div>
                Management
              </div>
  
            </div>
          </div>
        </div>
   
      </div>
    )
}
export default Navbar;