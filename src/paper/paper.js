import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "abcjs/abcjs-audio.css";
import "./paper.styles.js";

import { useStyles } from './paper.styles';
import { initPaper } from "./utils"
import { notations } from "./data";
import { NotationDialog } from "./dialog";
import { List } from "./list";

export const Paper = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [notation, setNotation] = useState(notations[0].notation);
  const [controller, setController] = useState(null);

  useEffect(() => {
    (async () => {
      const paper = await initPaper("paper", "audio", notations[0].notation);
      setController(paper.synthControl);
    })();
  }, []);

  const handleControllerChange = async value => {
    await controller.destroy();
    const paper = await initPaper("paper", "audio", value);
    setController(paper.synthControl);
  };

  const handleListSelect = async value => {
    await handleControllerChange(value);
    setNotation(value);
  };

  const handleCreateButton = () => {
    setOpen(true);
  };

  const handlePlayButton = async value => {
    await handleControllerChange(value);
    setNotation(value);
    setOpen(false);
  };

  return (
    <>
      <NotationDialog 
        open={open} 
        setOpen={setOpen}
        notation={notation}
        setNotation={setNotation} 
        onSave={handlePlayButton}
      />
      <Card>
        <List 
          value={notation}
          items={notations}
          onChange={handleListSelect}
        />
        <CardContent>
          <div className={classes.root} id="paper"></div>
          <div id="audio"></div>
        </CardContent>
        <CardActions
          style={{
            justifyContent: "center"
          }}
        >
          <Button 
            size="small"
            variant="outlined" 
            color="primary"
            onClick={() => handleCreateButton()}
          >
            Create own notation
          </Button>
        </CardActions>
      </Card>
    </>
  )
};
