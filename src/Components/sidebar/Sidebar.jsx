import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LogoutIcon from "@mui/icons-material/Logout";
import CollectionsIcon from '@mui/icons-material/Collections';
import PaymentsIcon from '@mui/icons-material/Payments';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ADMIN</span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <LibraryBooksIcon className="icon" />
            <span>Syllabus</span>
          </li>
          <li>
            <CollectionsIcon className="icon" />
            <span>Gallery</span>
          </li>
          <p className="title">ACTIONS</p>
          <li>
            <PaymentsIcon className="icon" />
            <span>Payments</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
          {/* <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li> */}
        </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  );
};

export default Sidebar;
