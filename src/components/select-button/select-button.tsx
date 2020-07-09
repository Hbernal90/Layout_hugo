import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ISelectButtonOptions } from '../../types/AppInterfaces'
import "./select-button.styles.scss";

export default function SelectButton({name, inputLabel, items, handleSelect, itemsSelected}: ISelectButtonOptions) {

  return (
    <div data-test="selectButton">
       
       <FormControl className="formControl">
        <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={itemsSelected}
          onChange={handleSelect}
          name={name}
        >
        {
            items.map( (item, index)=>
            <MenuItem key={index.toString()}value={item}>{item}</MenuItem>
          )
        }
        </Select>
      </FormControl>
       
    </div>
  );
}