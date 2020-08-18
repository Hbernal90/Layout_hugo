import React from "react";
import "./searchResults.styles.scss"
import { ISearchResult } from "../../types/AppInterfaces";
import { Link } from "react-router-dom";

function Many(data: ISearchResult[]) {
    const consultantList = data.map(item =>
        <Link to={"employee/" + item.id} className="itemResult" key={item.id}>
            <span className="consultantName">{item.name} {item.lastName}</span>
            <span className="consultantProject">{item.projectName}</span>
            <span className={"statusCircle  " + (item.active ? "active" : "inactive")} />
        </Link>
    );
    return <div className="resultContainer">{consultantList}</div>
}

function Empty() {
    return <div className="resultContainer noResults">No results from this search</div>
}

function DisplayResults(props: any) {
    const { data } = props;
    if (!data || data.length == 0)
        return Empty();
    else
        return Many(data as ISearchResult[]);
}

export default DisplayResults;
