import React, { useState } from "react";
import "./qrScanner.css";
import QRCode from "qrcode";
import QrReader from "react-qr-reader";
import { useRef } from "react";
const QrCodeGeneraerScanner = () => {
  const [text, setText] = useState("");
  const [gentratedCodeImg, setGeneratedCodeImg] = useState("");
  const [qrReadFromFile, setQrReadFromFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const[isOpen,setIsopen]=useState(false)
  const qrRef = useRef(null);
  //generateQrCode
  const handleGenrateQrCode = async () => {
    try {
      if (text) {
        const response = await QRCode.toDataURL(text);
        console.log("response", response);
        setGeneratedCodeImg(response);
      } else {
        alert("please Enter Some Text");
      }
    } catch (err) {
      console.error(err);
    }
  };
  // qrReaderFromFile

  const handleQrErrorFile = (error) => {
    if (error) {
      console.error(error);
    }
  };
  const handleQrScanFile = (result) => {
    if (result) {
      setQrReadFromFile(result);
    }
  };
  const handleQrReaderFile = () => {
    console.log("i am clicke");
   const output= qrRef.current.openImageDialog();
   console.log("output",output);
  };
  // scanner from webCam
  const handleQrErrorWebCam = (error) => {
    console.err(error);
  };
  const handleQrScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  return (
    <div>
      <h2 className="heading_text">QR code Generator and Scanner</h2>
      <div className="row">
        <div className="QrCodeGeneratorContainer col-md-4">
          <h3 className="qrGenerator_text">Qr Generator</h3>
          <div className="qrGenrator_inputbox">
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
            ></input>
            <button onClick={handleGenrateQrCode}>Generate Qr</button>
            <div className="qrGenrator_image">
              {gentratedCodeImg ? (
                <a href={gentratedCodeImg} download>
                  <img src={gentratedCodeImg} alt="Genrated image" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="QrCodeScannerByFile col-md-4">
          <h3 className="qrReader_text">Qr Reader from file</h3>
          <div className="qrReader_btn_container">
            <button type="button" onClick={handleQrReaderFile}>Qr Reader From File</button>
            <div className="qrReader">
              <QrReader
                ref={qrRef}
                delay={300}
                style={{ width: "100%" }}
                onError={handleQrErrorFile}
                onScan={handleQrScanFile}
                legacyMode
              />
            </div>
            <div className="quReadFileText">Scanned Code: {qrReadFromFile}</div>
          </div>
        </div>
        <div className="QrCodeScannerFromWebCam col-md-4">
          <h3 className="qrReader_text">Qr Reader from Webcam</h3>
          <button onClick={()=>setIsopen(true)}>OpenCamera</button>
          <button onClick={()=>{
            setIsopen(false)
            setScanResultWebCam(null)
          }}>CloseCamera</button>
         {
          isOpen? <div className="qrReader_btn_container">
          <div className="qrReader_camera">
            <QrReader
              ref={qrRef}
              delay={300}
              style={{ width: "100%" }}
              onError={handleQrErrorWebCam}
              onScan={handleQrScanWebCam}
            />
          </div>
          <div className="quReadfromWeb">
            Scanned Code By WebCam: {scanResultWebCam}
          </div>
        </div>:null
         }
        </div>
      </div>
    </div>
  );
};

export default QrCodeGeneraerScanner;
