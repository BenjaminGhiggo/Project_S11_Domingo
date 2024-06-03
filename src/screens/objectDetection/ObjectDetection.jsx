// src/screens/ObjectDetection.jsx
import * as cocossd from "@tensorflow-models/coco-ssd";
import '@tensorflow/tfjs-backend-webgl';
import { useEffect, useRef } from "react";

const ObjectDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const runObjectDetection = async () => {
      const net = await cocossd.load();

      if (videoRef.current) {
        videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          detectFrame(videoRef.current, net);
        };
      }
    };

    const detectFrame = (video, net) => {
      net.detect(video).then((predictions) => {
        drawBoundingBoxes(predictions);
        requestAnimationFrame(() => {
          detectFrame(video, net);
        });
      });
    };

    const drawBoundingBoxes = (predictions) => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;

      predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = "#00FF00";
        ctx.fillText(
          `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
          x,
          y > 10 ? y - 5 : 10
        );
      });
    };

    runObjectDetection();
  }, []);

  return (
    <div>
      <h2>Detección de Objetos en Tiempo Real</h2>
      <video ref={videoRef} style={{ width: "100%" }} />
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
    </div>
  );
};

export default ObjectDetection;
