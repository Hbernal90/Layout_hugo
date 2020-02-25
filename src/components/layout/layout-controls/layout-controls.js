import React from 'react';

import { Button } from '@material-ui/core';

const LayoutControls = (props) => {

    return (
        <div>
            <label>Rows: </label>
            <Button size="small" variant="contained" color="primary" 
                name="rows" onClick={(evt) => props.decreaseDimension(evt)}>
                -
            </Button>
            <div style={{display: 'inline-block', marginLeft: '15px', marginRight: '15px'}}>
                {props.rows}
            </div>
            <Button size="small" variant="contained" color="primary"
                name="rows" onClick={(evt) => props.changeDimension(evt, props.rows + 1)}>
                +
            </Button>
            
            <hr></hr>
            
            <label>Columns: </label>
            <Button size="small" variant="contained" color="primary"
                name="columns" onClick={(evt) => props.decreaseDimension(evt)}>
                -
            </Button>
            <div style={{display: 'inline-block', marginLeft: '15px', marginRight: '15px'}}>
                {props.columns}
            </div>
            
            <Button size="small" variant="contained" color="primary"
                name="columns" onClick={(evt) => props.changeDimension(evt, props.columns + 1)}>
                +
            </Button>
        </div>
    )
}

export default LayoutControls;