import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button(props) {
  // The rest variable contains all properties passed in on props except for children.
  const { children, ...rest } = props;
  return (
    <button
      className={styles.root}
      // Apply any other props we haven't documented yet to this button using the rest/spread syntax
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  "aria-label": PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  /** HTML ID to apply to the button
   *
   * - item one
   * - item two
   * - [more info here](http://google.com)
   */
  id: PropTypes.string,
};
