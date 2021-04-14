import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import MessageIcon from '@material-ui/icons/Message';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import './Navbar.css'

const Navbar = () => {
    return (
       <div className="backgroundNav">
       <nav class="navbar navbar-expand-lg navbar-light  container">
       <div class="container-fluid">
         <a class="navbar-brand" href="#">Hello D</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <form class="d-flex">
             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button class="btn btn-danger" type="submit">Search</button>
           </form>
           <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'60%'}}>
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="#"><HomeIcon/></a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#"><MessageIcon/></a>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <CategoryIcon/>
               </a>
               <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                 <li><a class="dropdown-item" href="#">Action</a></li>
                 <li><a class="dropdown-item" href="#">Another action</a></li>
                 <li><hr class="dropdown-divider"/></li>
                 <li><a class="dropdown-item" href="#">Something else here</a></li>
               </ul>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#"><LocalHospitalIcon/></a>
             </li>
           </ul>
           
         </div>
       </div>
     </nav>
       </div>
    );
};

export default Navbar;