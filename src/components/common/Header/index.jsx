import { useContext, useEffect, useState } from 'react';
import { Toolbar, Typography, Button, Container, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { BsTruck } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useCart } from 'react-use-cart';

import MenuHeader from './MenuHeader';
import BoxUser from './BoxUser';
import { styles } from './styles.js';
import BoxNotification from './BoxNotification';

import { Search, StyledInputBase, SearchIconWrapper, StyledAppBar } from '~/components/Custom';
import { brand_img_png } from '~/assets/img';
import { ThemeContext } from '~/context/ThemeContext.js';
import { hoverComponentState } from '~/store/selectors';
import { DropDown } from '~/components/elements/DropDown';
import { useDebounce } from '~/hook';
import { fetchLaptops } from '~/apis';

export default function Header() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(searchInput, 700);
  const [rsData, setRsData] = useState(null);
  const hideDropdown = () => {
    setRsData(null);
  };

  const [isScrollDown, setIsScrollDown] = useState(false);
  const globalState = useContext(ThemeContext);
  const isHoverComponent = useSelector(hoverComponentState);
  const { totalItems, isEmpty } = useCart();

  useEffect(() => {
    if (globalState.isScrollDown === true) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  }, [globalState.isScrollDown, isHoverComponent, isScrollDown]);

  useEffect(() => {
    if (debouncedSearch.trim()) {
      fetchLaptops(debouncedSearch)
        .then(data => {
          if (data.status === 200) setRsData(data.data);
        })
        .catch(e => console.log('fetchLaptops error', e));
    } else {
      hideDropdown();
    }
  }, [debouncedSearch]);

  return (
    <StyledAppBar sx={styles.app_bar}>
      <Container maxWidth="lg">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button disableRipple sx={{ padding: '0 0 8px 0', mr: 2 }}>
              <img src={brand_img_png} alt="brand" style={styles.img_brand} />
            </Button>
          </Link>
          <MenuHeader secondState={isScrollDown} />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                '&:hover': {
                  '& .MuiTypography-root': {
                    color: '#0065ee'
                  }
                }
              }}
            >
              <Typography sx={styles.text_promote}>Khuyến mãi</Typography>
            </Button>
          </Link>
          <div
            style={{
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Search style={{ width: isScrollDown ? '300px' : '462px' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Tìm kiếm…"
                inputProps={{ 'aria-label': 'search' }}
                style={{ width: isScrollDown ? '272px' : '372px' }}
              />

              <DropDown products={rsData} callback={hideDropdown} />
            </Search>
          </div>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <IconButton
              sx={{
                borderRadius: '20px',
                width: '64px',
                margin: '0 6px',
                backgroundColor: isEmpty ? 'transparent' : '#fe6600',
                '&:hover': {
                  backgroundColor: isEmpty ? '#14cdc8' : '#d35400',
                  transition: '0.5s ease-in-out'
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <AiOutlineShoppingCart style={Object.assign({ paddingRight: '6px' }, styles.icon_header)} />
                <Typography variant="body1" component="p" sx={{ p: '4px' }}>
                  {totalItems}
                </Typography>
              </div>
            </IconButton>
          </Link>
          <Link to="/user/management-orders" style={{ textDecoration: 'none' }}>
            <IconButton
              sx={{
                margin: '0 6px',
                '&:hover': {
                  backgroundColor: '#14cdc8',
                  transition: '0.5s ease-in-out'
                }
              }}
            >
              <BsTruck style={styles.icon_header} />
            </IconButton>
          </Link>
          <BoxNotification style_icon={styles.icon_header} />
          <BoxUser style_icon={styles.icon_header} />
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
