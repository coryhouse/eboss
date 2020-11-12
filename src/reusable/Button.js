import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button className={styles.root} style={props.style} id={props.id}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
  /** HTML ID to apply to the button
   *
   * - item one
   * - item two
   * - [more info here](http://google.com)
   */
  id: PropTypes.string,
};
