import logo from '../../assets/Logo-small.svg';
import { DotsNine, CaretDown } from '@phosphor-icons/react';
import './header.css';
import { Link } from 'react-router-dom';
import MiniCard from '../minicard/MiniCard';
import TextField from '@mui/material/TextField';



const Header = () => {
  const headerStyle = {
    width: '100%',
    display: 'flex',
    height: '4rem',
    justifyContent: 'space-between',
    paddingInline: '1rem',
    boxShadow: '0 0 2px 2px rgba(0, 0, 0,0.1)',
    marginBlockEnd: '2rem',
  };
  return (
    <header className='header' style={headerStyle}>
      <div className='group-width flex space-between align-item-center col-gap-1'>
        <div className='flex col-gap-1'>
          <img src={logo} />
          <p className='bold'>Thullo</p>
        </div>
        <p className='bold'>Devchallenges Board</p>
        <div className='divider'></div>
        <button className='allboard-button flex place-items col-gap-05'>
          <span className='flex'>
            <DotsNine />
          </span>
          <span>All board</span>
        </button>
      </div>

      <div className='group-width flex flex-end align-item-center col-gap-2'>
        <div className='search flex col-gap-1'>
          {/* <input type='text' className='search-input' placeholder='Keyword..' /> */}
          <TextField className='' size='small'  />
          <button>Search</button>
        </div>
        <Link>
          <div className=' flex place-items col-gap-05 align-item-center'>
            <div className='auth-image'>
              <MiniCard height={32} width={32} src='' />
            </div>

            <p>Xanthe Neal</p>
            <CaretDown size={18} />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
