import React from 'react'
import { ProgressBar } from 'react-loader-spinner';

const IsLoadingBar = ({visible}) => {
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
}

export default IsLoadingBar
