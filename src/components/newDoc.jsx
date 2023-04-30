// src/components/Button.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component with optional size prop.
 * 
 * @param {string} size - The size of the button ("small", "medium", or "large").
 * @param {string} children - The text to display on the button.
 */
export const Button = ({ size = 'medium', children }) => {
  const styles = {
    fontSize: size === 'small' ? '12px' : size === 'large' ? '24px' : '16px',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
  };

  return (
    <button style={styles}>{children}</button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
};
