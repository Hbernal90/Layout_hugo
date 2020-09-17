import React from "react";
import "./searchResults.styles.scss"
import { ISearchResult, IResultSetOptions} from "../../types/AppInterfaces";
import { Link } from "react-router-dom";

function Many(data: ISearchResult[], filter: string) {
    const consultantList = data.map(item =>
        <Link to={"employee/" + item.id} className="itemResult" key={item.id}>
            <span className="consultantName">{item.name} {item.lastName}</span>
            <span className="consultantProject">{item.projectName}</span>
            <span className={"statusCircle  " + (item.active ? "active" : "inactive")} />
        </Link>
    );
    return (
        <div className="resultContainer" key={filter}>
            <span className="filter">{filter}</span>
            {consultantList}
        </div>
    )
}

const Empty = () => <div className="resultContainer noResults">No results from this search</div> 

const Invalid = () => <div className="resultContainer error">An error occurred, try again</div>

function DisplayResults(props: IResultSetOptions) {
    const { data } = props;
    if(!data)
        return Empty();
    if(data["__INVALID__"])
        return Invalid();
    else if(data["__EMPTY__"])
        return Empty();
    
    const filterList = Object.keys(data);
    return (
        <React.Fragment>
            {
                filterList.map( filter => {
                    return Many(data[filter], filter);
                })
            }
        </React.Fragment>
    );    
}

export default DisplayResults;
