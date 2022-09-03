import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ButtonVariants, NavigationMenuItems } from 'core/constants/common';
import MailIcon from 'components/Icons/MailIcon';
import InstagramIcon from 'components/Icons/InstagramIcon';
import FacebookIcon from 'components/Icons/FacebookIcon';
import Logo from 'components/Logo';
import StyledButton from 'components/StyledButton';
import Navigation from 'components/Navigation';
import MenuContext from 'context/MenuContext';

const Header = () => {
  const navigate = useNavigate();
  const { setCurrentMenuItem } = useContext(MenuContext);
  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      sx={{
        padding: '0 10%',
        background:
          'linear-gradient(180deg, rgba(211, 231, 180, 0.3) 41.67%, rgba(218, 232, 196, 0) 117.37%)',
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Grid
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          sx={{
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/', { replace: true });
            setCurrentMenuItem(NavigationMenuItems.main);
          }}
        >
          <Logo />
          <Typography
            color={colors.violet}
            sx={{
              ...fonts.stixNormal24,
            }}
          >
            Збережи дитину
          </Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography
            color={colors.grey}
            sx={{
              ...fonts.montserratNormal14,
            }}
          >
            Безкоштовна гаряча линия
          </Typography>
          <Typography
            color={colors.matteBlack}
            sx={{
              ...fonts.montserratMedium16,
            }}
          >
            +380 800 213 452
          </Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'19px'}>
          <MailIcon />
          <InstagramIcon />
          <FacebookIcon />
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'30px'}>
          <StyledButton buttonVariant={ButtonVariants.primary}>Хочу допомогти</StyledButton>
          <StyledButton buttonVariant={ButtonVariants.secondary}>Потрібна допомога</StyledButton>
        </Grid>
      </Grid>
      <Navigation />
    </Grid>
  );
};

export default Header;
