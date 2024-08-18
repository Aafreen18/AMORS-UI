import React from 'react';

const Circle = (props) => {
  const circleStyle = {
    position: 'absolute',
    top: props.top,
    left: props.left,
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: `linear-gradient(to right, ${props.color}, black)`,
    transform: 'translate(-50%, -50%)',
    zIndex:-1
  };

  return <div style={circleStyle}  className={props.className}></div>;
};

export default Circle;