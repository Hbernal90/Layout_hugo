import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectButton({floors, handleSelect, floorSelected}) {

  const classes = useStyles();
  return (
    <div>
       
       <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Floor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={floorSelected}
          onChange={handleSelect}
        >
        {
            floors.map( (item, index)=>
            <MenuItem key={index.toString()}value={item}>{item}</MenuItem>
          )
        }
        </Select>
      </FormControl>
       
    </div>
  );
}