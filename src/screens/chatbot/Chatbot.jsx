import * as cocossd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs-backend-webgl";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import AttachIcon from "../../assets/icons/attach-icon.svg"; // Actualiza la ruta
import BotIcon from "../../assets/icons/bot-icon.svg"; // Actualiza la ruta
import PhotoIcon from "../../assets/icons/photo-icon.svg"; // Actualiza la ruta
import RecordIcon from "../../assets/icons/record-icon.svg"; // Actualiza la ruta
import SendIcon from "../../assets/icons/send-icon.svg"; // Actualiza la ruta
import UserIcon from "../../assets/icons/user-icon.svg"; // Actualiza la ruta
import { auth } from "../../config/firebase";
import "./Chatbot.scss";

const apiKey = 'AIzaSyCF02A7uVq2uvAhpjgm_x15B2B2JPGABXo';
const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const Chatbot = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const messagesEndRef = useRef(null);
  const [activeTab, setActiveTab] = useState("chat");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [stream, setStream] = useState(null);
  const [isBackCamera, setIsBackCamera] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (activeTab !== "deteccion" && cameraActive) {
      deactivateCamera();
    }
  }, [activeTab]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: "user", photoURL: user?.photoURL };
      setMessages([...messages, userMessage]);
      setInput("");
      setGeneratingAnswer(true);

      try {
        const response = await axios.post(`${apiUrl}?key=${apiKey}`, {
          contents: [{ parts: [{ text: input }] }],
        });

        const botMessage = {
          text: response.data.candidates[0].content.parts[0].text,
          sender: "bot"
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error fetching response from GoogleStudio:", error);
        const errorMessage = {
          text: "Oops! There was an error contacting the bot.",
          sender: "bot"
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }

      setGeneratingAnswer(false);
    }
  };

  const activateCamera = async () => {
    setCameraActive(true);
    const net = await cocossd.load();
    const constraints = {
      video: {
        facingMode: isBackCamera ? { exact: "environment" } : "user",
      },
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          detectFrame(videoRef.current, net);
        };
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const deactivateCamera = () => {
    setCameraActive(false);
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const switchCamera = () => {
    setIsBackCamera((prev) => !prev);
    deactivateCamera();
    setTimeout(() => {
      activateCamera();
    }, 500);
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
    ctx.font = "18px Arial";

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

  return (
    <div className="chatbot-page">
      <div className="chatbot-header">
        <button className="chatbot-tab" onClick={() => setActiveTab("chat")}>Chat</button>
        <button className="chatbot-tab" onClick={() => setActiveTab("deteccion")}>Detección</button>
        <button className="chatbot-tab" onClick={() => setActiveTab("mapa")}>Mapa</button>
      </div>
      <div className="chatbot-container">
        {activeTab === "chat" && (
          <>
            <div className="chatbot-body">
              <div className="chatbot-message-container">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`chat-message ${
                      message.sender === "bot" ? "bot-message" : "user-message"
                    }`}
                  >
                    <img
                      src={message.sender === "bot" ? BotIcon : message.photoURL || UserIcon}
                      alt="avatar"
                      className="chat-icon"
                    />
                    <div className="chat-text">{message.text}</div>
                  </div>
                ))}
                <div ref={messagesEndRef}></div>
              </div>
            </div>
            <form className="chatbot-footer" onSubmit={handleSend}>
              <div className="chat-input-container">
                <input
                  type="text"
                  className="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={generatingAnswer}
                />
                <div className="chatbot-icons">
                  <img src={AttachIcon} alt="attach" />
                  <img src={PhotoIcon} alt="photo" />
                  <img src={RecordIcon} alt="record" />
                  <button type="submit" disabled={generatingAnswer}>
                    <img src={SendIcon} alt="send" />
                  </button>
                </div>
              </div>
              <img src={user?.photoURL || UserIcon} alt="user" className="chat-icon user-icon" />
            </form>
          </>
        )}
        {activeTab === "deteccion" && (
          <div className="deteccion-container">
            <h2>Detección de Objetos en Tiempo Real</h2>
            <div className="button-group">
              <button onClick={activateCamera} className="activate-camera-btn">Activar Cámara</button>
              <button onClick={deactivateCamera} className="deactivate-camera-btn">Desactivar Cámara</button>
              <button onClick={switchCamera} className="switch-camera-btn">Cambiar Cámara</button>
            </div>
            <div className="camera-container">
              <video ref={videoRef} style={{ display: cameraActive ? 'block' : 'none' }} />
              <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, display: cameraActive ? 'block' : 'none' }} />
            </div>
          </div>
        )}
        {activeTab === "mapa" && (
          <div className="mapa-container">
            {/* Contenido para la pestaña de Mapa */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
