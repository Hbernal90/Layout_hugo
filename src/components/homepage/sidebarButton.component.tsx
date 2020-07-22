import React from "react";
import { Link } from 'react-router-dom';
import { ISidebarButtonOptions } from "../../types/AppInterfaces";

function SidebarButton({ title, link, className = "" }: ISidebarButtonOptions) {

    return (
        <Link to={link} className={`sidebarButton ${className}`}>
            <span className="title">{title}</span>
        </Link>
    )
}

export default SidebarButton;