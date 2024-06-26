import { Circles } from 'react-loader-spinner';

const IsLoading:React.FC = () => {
  return (
    <Circles
      height='80'
      width='80'
      color='#4fa94d'
      ariaLabel='circles-loading'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
    />
  );
};

export default IsLoading;
