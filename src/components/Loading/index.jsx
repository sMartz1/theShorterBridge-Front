import React from "react";
import "./index.scss";
export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-text">Acortando URL...</div>
      <div className="reduced"></div>
    </div>
  );
}
