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
import { notations, initialNotation } from "./data";
import { NotationDialog } from "./dialog";

export const Paper = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [notation, setNotation] = useState(initialNotation);
  const [controller, setController] = useState(null);

  useEffect(() => {
    (async () => {
      const paper = await initPaper("paper", "audio", notations[0]);
      setController(paper.synthControl);
    })();
  }, []);

  const handleRandomizeButton = async () => {
    await controller.destroy();
    const randomItem = array => array[Math.floor(Math.random() * array.length)];
    const paper = await initPaper("paper", "audio", randomItem(notations));
    setController(paper.synthControl);
  };

  const handleCreateButton = () => {
    setOpen(true);
  };

  const handlePlayButton = async () => {
    await controller.destroy();
    const paper = await initPaper("paper", "audio", notation);
    setController(paper.synthControl);
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
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            ABC demo app
          </Typography>
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
            onClick={() => handleRandomizeButton()}
          >
            Randomize notation
          </Button>
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
