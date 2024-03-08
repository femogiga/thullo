import React from 'react';
import Header from '../../header/Header';
import AllBoard from '../../allboard/AllBoard';
import IsLoading from '../../auxillary/IsLoading';

const AllBoardPage:React.FC = () => {
  return (
    <div>
      <Header />
      <AllBoard />
    {/* <IsLoading/> */}
    </div>
  );
};

export default AllBoardPage;
