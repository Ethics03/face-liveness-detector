import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React,{useRef} from 'react'
import Webcam from 'react-webcam'
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
import {drawmesh} from './utilities'
import Header from './components/Header/Header'

function App() {
  const webref = useRef(null);
  const canvaref = useRef(null);

  const runfacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: {width: 640, height: 480}, scale: 0.8
    })
    setInterval(() => {
      detect(net)
    },100)
  }
  
  const detect = async (net) => {
    if(
      typeof webref.current !== "undefined" 
      && webref.current !== null 
      && webref.current.video.readyState === 4){

        const video =webref.current.video;
        const videowidth = video.videoWidth
        const videoheight = video.videoHeight

        canvaref.current.width = videowidth;
        canvaref.current.height = videoheight;

        //canvaref.current.width = videowidth;
        //canvaref.current.height = videoheight;

          //detection
          const face = await net.estimateFaces(video);
          console.log('Detected face',face);

       
        
        const ctx = canvaref.current.getContext("2d");
        console.log(ctx)
        drawmesh(face,ctx)
        
    }
  }

   
  runfacemesh(); 
  return (
    <>

      <Header/>
      <div className="container w-full">
        
      <div className="flex justify-center items-center h-screen relative">
        <Webcam
          className="webcam-video absolute w-640 h-480 rounded"
          ref={webref}
        />
        <canvas
          ref={canvaref}
          className="canvas-mesh absolute w-640 h-480"
        />
      </div>
    </div>
    </>
  )
}

export default App
