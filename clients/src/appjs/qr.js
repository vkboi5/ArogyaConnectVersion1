import React, { useState } from "react";
import { Fab, TextareaAutosize } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { QrReader } from "react-qr-reader";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleResult = (result) => {
    if (result) {
      setQrscan(result);
    }
  };

  const handleTextAreaChange = (event) => {
    setQrscan(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
        <Link to="/">
          <Fab style={{ marginRight: "10px" }} color="primary">
            <ArrowBack />
          </Fab>
        </Link>
        <span style={{ fontSize: "24px" }}>QR Scanner</span>
      </div>

      <div style={{ marginTop: "30px" }}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          onResult={handleResult} // Add this line
          style={{ height: "240px", width: "320px" }}
        />
      </div>

      <TextareaAutosize
        style={{ fontSize: "18px", width: "80%", minHeight: "100px", marginTop: "50px", resize: "vertical", overflowWrap: "break-word" }}
        maxRows={4}
        value={qrscan}
        onChange={handleTextAreaChange}
      />
    </div>
  );
}

export default QRscanner;
