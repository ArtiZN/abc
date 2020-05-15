import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStyles } from './list.styles';

export const List = ({
  value,
  items,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select notation...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={event => onChange(event.target.value)}
        >
          {items.map(item => (
            <MenuItem key={item.title} value={item.notation}>{item.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
