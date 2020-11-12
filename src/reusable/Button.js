import React from "react";
import styles from "./Button.module.css";

export function Button(props) {
  return (
    <button
      className={`${styles.root} ${props.className}`}
      style={props.style}
      id={props.id}
    >
      {props.children}
    </button>
  );
}