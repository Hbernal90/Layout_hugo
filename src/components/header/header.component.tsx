import React, { useCallback, useState } from 'react';
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


const Header = () => {
    const [searchResults, setSearchResults] = useState<Record<string, ISearchResult[]>>();

    const clearSearch = useCallback(() => {
        setSearchResults(undefined);
        var node = document.querySelector<HTMLInputElement>("input.inputText[name='searchTerm']");
        node!.value = "";
    }, [setSearchResults]);

    const handleSearchChange = useCallback(evt => {
        if (evt.target.value === "")
            clearSearch();
    }, [clearSearch]);

    const fetchResults = useCallback(async (firstName = undefined, lastName = undefined, project = undefined) => {
        var baseRequest = "https://localhost:5001/api/v1/Employees?";
        if (firstName != undefined)
            baseRequest += "&name=" + firstName;
        if (lastName != undefined)
            baseRequest += "&lastName=" + lastName;
        if (project != undefined)
            baseRequest += "&projectName=" + project;
        try{
            const res = await axios.get(baseRequest);
            return res.data;
        } catch(err){
            console.error(err.message);
            return undefined;
        };
    }, []);

    const beginSearch = useCallback(async (e) => {
        var node = document.querySelector<HTMLInputElement>("input.inputText[name='searchTerm']");
        var searchTerm = node?.value;

        const arr = searchTerm?.split(" ") || [];
        const firstName = arr[0];
        const lastName = arr[1];
        e.preventDefault();
        var resultSet: Record<string, ISearchResult[]> = {};
        const resultsByName = await fetchResults(firstName, lastName);
        var totalResults = 0;
        const resultsByProject = await fetchResults(undefined, undefined, searchTerm); // using the whole input as project
        if(!resultsByName && !resultsByProject){ // every result is null
            resultSet["__INVALID__"] = [];
            setSearchResults(resultSet);
            return;
        }
        if(resultsByName.length){
            resultSet["Full Name"] = resultsByName;
            totalResults += resultsByName.length;
        }
        if(resultsByProject.length){
            resultSet["Project"] = resultsByProject;
            totalResults += resultsByProject.length;
        }
        if(!totalResults)
            resultSet["__EMPTY__"] = [];

        setSearchResults(resultSet);
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
                            {searchResults && 
                                <DisplayResults data={searchResults} />
                            }
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