import React, { useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import SettingsIcon from "@material-ui/icons/Settings";
import './header.styles.scss';
import apexLogo from '../../assets/apex-logo.png';
import apexMinLogo from "../../assets/apex-min-logo.png";
import axios from "axios";
import DisplayResults from "./searchResults.component";
import { ISearchResult } from "../../types/AppInterfaces";

const dummyData: ISearchResult[] = [
    {
        "id": 159,
        "projectId": 3,
        "projectName": "Bench",
        "name": "Jorge ",
        "lastName": "Molina",
        "active": true
    },
    {
        "id": 172,
        "projectId": 3,
        "projectName": "Bench",
        "name": "Jorge ",
        "lastName": "Ramos",
        "active": false
    },
    {
        "id": 277,
        "projectId": 3,
        "projectName": "Bench",
        "name": "Jorge ",
        "lastName": "Garcia",
        "active": true
    }
]

const Header = () => {
    const [searchResults, setSearchResults] = React.useState<ISearchResult[] | undefined>(dummyData);

    const handleSearchResult = useCallback((result) => {
        const { data } = result;
        setSearchResults(data);
    }, []);

    const clearSearch = useCallback(() => {
        setSearchResults(undefined);
        var node = document.querySelector<HTMLInputElement>("input.inputText[name='searchTerm']");
        node!.value = "";
    }, [setSearchResults]);

    const handleSearchChange = useCallback(evt => {
        if (evt.target.value === "")
            clearSearch();
    }, [clearSearch]);

    const fetchResults = useCallback((firstName = undefined, lastName = undefined, project = undefined) => {
        var baseRequest = "https://localhost:5001/api/v1/Employees?";
        if (firstName != undefined)
            baseRequest += "&name=" + firstName;
        if (lastName != undefined)
            baseRequest += "&lastName=" + lastName;
        if (project != undefined)
            baseRequest += "&projectName=" + project;
        axios.get(baseRequest).then(handleSearchResult).catch(console.log);
    }, []);

    const beginSearch = useCallback((e) => {
        var node = document.querySelector<HTMLInputElement>("input.inputText[name='searchTerm']");
        var searchTerm = node?.value;
        // Solución muy cavernícola: input => <NOMBRE><ESPACIO><APELLIDO>
        const arr = searchTerm?.split(" ") || [];
        const firstName = arr[0];
        const lastName = arr[1];
        e.preventDefault();
        fetchResults(firstName, lastName);
    }, []);

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
                    <form className="searchWrapper" onSubmit={beginSearch}>
                        <div className={"searchResults " + (searchResults ? "show" : "hide")}>
                            <DisplayResults data={searchResults} />
                        </div>
                        <SearchIcon className="searchIcon" />
                        <InputBase
                            name="searchTerm"
                            placeholder="Search…"
                            autoComplete="off"
                            classes={{
                                root: "inputRoot",
                                input: "inputText",
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleSearchChange}
                        />
                        <span
                            className={"dismiss " + (searchResults ? "show" : "hide")}
                            onClick={clearSearch}>X</span>
                    </form>
                    <div className="profileWrapper">
                        <SettingsIcon className="gearButton" />
                        <div className="profileButton">
                            <span>CC</span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );

}

export default Header;