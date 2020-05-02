import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "abcjs/abcjs-audio.css";
import "./paper.css";

import { initPaper } from "./utils"
import { notations } from "./data";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Paper = () => {
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const paper = await initPaper("paper", "audio", notations[0]);
    })();
  }, []);

  const handleButton = async () => {
    const el = document.getElementsByClassName("abcjs-pushed");
    if (el[0]) el[0].click();
    const randomItem = array => array[Math.floor(Math.random() * array.length)];
    const paper = await initPaper("paper", "audio", randomItem(notations));
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            ABC demo app
          </Typography>
          <div id="paper"></div>
          <div id="audio"></div>
          {/* <textarea id="edit-area"></textarea> */}
        </CardContent>
        <CardActions
          style={{
            justifyContent: "center"
          }}
        >
          <Button 
            size="small"
            onClick={() => handleButton()}
          >
            Change notation
          </Button>
        </CardActions>
      </Card>
    </>
  )
};
