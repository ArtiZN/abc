import abcjs from "abcjs";

export const initPaper = async (paperID, audioID, abc) => {
  if (abcjs.synth.supportsAudio()) {
    const cursorControl = {
      onStart() {
        console.log("Started");
      },
      onFinished() {
        console.log("Finished");
      },
      onBeat(beatNumber, totalBeats, totalTime) {
        console.log("Beat: ", beatNumber, totalBeats, totalTime);
      }
    };
    const abcOptions = { add_classes: true };
    const audioParams = { chordsOff: true };

    const synthControl = new abcjs.synth.SynthController();
    synthControl.load(`#${audioID}`, cursorControl, {
      displayLoop: true,
      displayRestart: true, 
      displayPlay: true,
      displayProgress: true,
      displayWarp: true
    });
  
    const visualObj = abcjs.renderAbc(paperID, abc, abcOptions);
    const synth = new abcjs.synth.CreateSynth();

    try {
      await synth.init({ 
        visualObj: visualObj[0],
        millisecondsPerMeasure: 400
      });
      await synthControl.setTune(visualObj[0], false, audioParams);
      
      console.log("Audio successfully loaded.", visualObj)
    } catch (error) {
      console.warn("Audio problem:", error);
    }

    return {
      visualObj,
      synth,
      synthControl
    };

  } else {
    document.querySelector(`#${audioID}`).innerHTML = "Audio is not supported in this browser.";
  }
};