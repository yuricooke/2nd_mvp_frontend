import React from "react";
import Icon from "./Icon";

import "./Components.css"
import { useNavigate } from "react-router-dom";


function Menu() {

  const navigate = useNavigate();

    const icons = [
        { type: "hiking" },
        { type: "group" },
        { type: "favorite" }
    ];

    return (
        <div className="menu_navbar">
            <img src="../great_hikes.svg" alt="Great Hikes" width="40px" style={{cursor: "pointer"}} onClick={() => navigate(`/Hikes`)}/>
            <div className="menu_icons">
            {icons.map((icon, index) => (
                <Icon key={index} type={icon.type} />
            ))}
            </div>
        </div>
    );
}

export default Menu;
