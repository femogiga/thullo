import React, { useEffect, useState } from 'react';

const TaskPanel = ({ children }) => {
  const [visibleState, setVisibleState] = useState(false);
  // const handleDeleteRenameVisibility = () => {
  //   setVisibleState(!visibleState);
  // };

  // useEffect(() => {}, [visibleState]);
  const style = {
    // border: '1px solid black',
    width: 'min-content',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    position:'relative',

    rowGap: '1rem',
  };
  return <div style={style} >{children}</div>;
};

export default TaskPanel;
