import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CollectionsIcon from '@mui/icons-material/Collections';
import PaymentsIcon from '@mui/icons-material/Payments';

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "teachers":
            data = {
                title: "Teachers",
                isMoney: true,
                link: "See all teachers",
                icon: <PersonOutlineIcon className="icon" 
                style={{backgroundColor: "rgb(255, 218, 150)"}}/>,
            };
            break;
            case "syllabus":
            data = {
                title: "Syllabus",
                isMoney: false,
                link: "See all syllabus",
                icon: <LibraryBooksIcon className="icon" style={{backgroundColor: "#c7c6fe"}}/>,
            };
            break;
            case "gallery":
            data = {
                title: "Gallery",
                isMoney: false,
                link: "See all photos",
                icon: <CollectionsIcon className="icon" style={{backgroundColor: "#fec6c6"}}/>,
            };
            break;
            case "payments":
            data = {
                title: "Payments",
                isMoney: true,
                link: "See all payments",
                icon: <PaymentsIcon className="icon" style={{backgroundColor: "#c6fece"}}/>,
            };
            break;
            default: break;
    }



  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "₹"}{data.isMoney && amount}</span>
        <span className="link">{data.link}</span>
      </div>
      
      <div className="right">
        {/* <div className="percentage">
          <KeyboardArrowUpIcon />
          80%
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
