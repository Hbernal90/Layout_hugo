import React from "react";
import { Link } from 'react-router-dom';
import {ISidebarButtonOptions} from "../../types/AppInterfaces";

function SidebarButton({title, link, className = ""}: ISidebarButtonOptions) {

    return (
        <div className={`sidebarButton ${className}`}>
            <Link to={link}>
                <div className="title">{title}</div>
            </Link>
        </div>
    )
}

export default SidebarButton;