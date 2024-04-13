import React from 'react';
import Header from '../../header/Header';
import AllBoard from '../../allboard/AllBoard';

const AllBoardPage:React.FC = () => {
  return (
    <div style={{minHeight:'100vh'}}>
      <Header />
      <AllBoard />
    {/* <IsLoading/> */}
    </div>
  );
};

export default AllBoardPage;
