import logo from '../../assets/Logo-small.svg';
import { DotsNine, CaretDown } from '@phosphor-icons/react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MiniCard from '../minicard/MiniCard';
import TextField from '@mui/material/TextField';
import HeaderModal from './HeaderModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setHeaderModalOpen } from '../../features/visibilitySlice';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@mui/material';
import { setSearchTerm } from '../../features/PageInformationSlice';
import { useEffect, useState } from 'react';


interface IHeader{
  boardName: string;
}

const Header: React.FC<IHeader> = ({ boardName }) => {
  const headerStyle = {
    width: '100%',
    display: 'flex',
    height: '4rem',
    justifyContent: 'space-between',
    paddingInline: '1rem',
    boxShadow: '0 0 1px 1px rgba(0, 0, 0,0.1)',
    marginBlockEnd: '.2rem',
  };


  const searchTerm = useSelector((state) => state.pageInformation.searchTerm);
  //console.log(searchTerm);

  const headerModalOpen = useSelector(
    (state) => state.visibility.headerModalOpen
  );

  const [searchWord, setSearchWord] = useState<string>('');

  const handleSearch = async () => {

    dispatch(setSearchTerm(searchWord));

    if (window.location.href.includes('allboard')) {
      return;
    }
    navigate('/allboard',{state:{searchTerm:searchTerm}});
  };
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchWord === '') {
      setSearchWord('');
    }
    setSearchWord(e.target.value);
  };
  //console.log(searchWord)
  //console.log('searchTerm', searchTerm);
  const loggedInUser = useSelector((state) => state.auth.user);
  // console.log('User', loggedInUser);
  const fullName = loggedInUser.firstname + ' ' + loggedInUser.lastname;
  // const handleLogout = () => {
  //   dispatch(setIsAuthenticated(false))
  //       dispatch(setUser(null));

  // }

  useEffect(() => {}, [searchWord]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHeaderLinkAccountClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    dispatch(setHeaderModalOpen(!headerModalOpen));
  };

  const handleAllboardLinkClick = () => {
    dispatch(setHeaderModalOpen(false));
    //navigate('/allboard');
  };

  return (
    <header className='header' style={headerStyle}>
      <div className='group-width flex space-between align-item-center col-gap-1'>
        <div className='flex col-gap-1'>
          <img src={logo} />
          <p className='bold'>Thullo</p>
        </div>
        {boardName && (
          <>
            <p className='bold'>{boardName || 'Devchallenges Board'}</p>
            <div className='divider'></div>

            <Link
              style={{ padding: '.5rem', backgroundColor: '#E0E0E06E' }}
              to='/allboard'
              onClick={handleAllboardLinkClick}
              className='allboard-button flex place-items col-gap-05'>
              <span className='flex'>
                <DotsNine />
              </span>

              <span>All board</span>
            </Link>
          </>
        )}
      </div>

      <div className='group-width flex flex-end align-item-center col-gap-2'>
        <div className='search flex col-gap-1'>
          {/* <input type='text' className='search-input' placeholder='Keyword..' /> */}
          <TextField
            className=''
            size='small'
            sx={{ width: '20rem' }}
            value={searchWord}
            onChange={handleSearchInputChange}
          />
          <Button
            onClick={handleSearch}
            sx={{
              color: '#2F80ED',
              textTransform: 'capitalize',
              '&:hover': { backgroundColor: 'blue' },
            }}>
            Search
          </Button>
        </div>
        <Link to='' onClick={handleHeaderLinkAccountClick}>
          <div className=' flex place-items col-gap-05 align-item-center'>
            <div className='auth-image'>
              <MiniCard height={32} width={32} src={loggedInUser?.imgUrl} />
            </div>

            <p>{fullName || 'Xanthe Neal'}</p>
            <CaretDown size={18} />
          </div>
        </Link>
        <div
          style={{
            position: 'absolute',
            top: '4rem',
            right: '0',
            zIndex: '6',
          }}>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, translateY: 0 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, translateY: 0 }}
              style={
                {
                  // position: 'absolute',
                  // right: '4rem',
                  // top: '0rem',
                  // zIndex: '6',
                }
              }>
              {headerModalOpen && <HeaderModal />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
