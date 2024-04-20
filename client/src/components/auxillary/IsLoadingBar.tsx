import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

interface IIsLoadingBar {
  visible: boolean;
}
const IsLoadingBar: React.FC<IIsLoadingBar> = ({ visible }) => {
  return (
    <ProgressBar
      visible={visible}
      height='60'
      width='200'
      color='#4fa94d'
      ariaLabel='progress-bar-loading'
      wrapperStyle={{}}
      wrapperClass=''
    />
  );
};
//
export default IsLoadingBar;
