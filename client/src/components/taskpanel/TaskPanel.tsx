import React from 'react';

const TaskPanel = ({ children }) => {
  const style = {
    // border: '1px solid black',
    width: 'min-content',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',

    rowGap: '1rem',
  };
  return <div style={style}>{children}</div>;
};

export default TaskPanel;
