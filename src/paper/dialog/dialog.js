import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { initialNotation } from '../data';

export const NotationDialog = ({ 
  open,
  setOpen,
  notation,
  setNotation,
  onSave
}) => {  
  const [fullWidth] = useState(true);
  const [maxWidth] = useState('sm');
  const [inputValue, setInputValue] = useState(initialNotation);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = value => {
    setNotation(value);
    setInputValue(value);
  };

  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Custom notation</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-multiline-flexible"
            label="Notation"
            style={{
              width: '100%'
            }}
            multiline
            value={inputValue}
            onChange={event => handleInputChange(event.target.value)}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onSave(inputValue)} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}