import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import SettingsIcon from "@material-ui/icons/Settings";
import './header.styles.scss';
import apexLogo from '../../assets/apex-logo.png';
import apexMinLogo from "../../assets/apex-min-logo.png";

const Header = () => {
    return (
        <div className="headerRoot">
            <AppBar className="appBar">
                <Toolbar className="toolBarContainer">
                    <div className="logoWrapper">
                        <Link to="/">
                            <img className="maxLogo" src={apexLogo} alt="APEX" />
                            <img className="minLogo" src={apexMinLogo} alt="APEX" />
                        </Link>
                    </div>
                    <div className="searchWrapper">
                        <SearchIcon className="searchIcon"/>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: "inputRoot",
                                input: "in",
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className="profileWrapper">
                            <SettingsIcon className="gearButton"/>
                            <div className="profileButton">
                                <span>CC</span>
                            </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Header;