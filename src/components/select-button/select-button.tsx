import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ISelectButtonOptions } from '../../types/AppInterfaces'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectButton({name, inputLabel, items, handleSelect, itemsSelected}: ISelectButtonOptions) {

  const classes = useStyles();
  return (
    <div>
       
       <FormControl className={classes.formControl}>
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