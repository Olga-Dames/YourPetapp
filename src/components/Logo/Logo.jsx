import { ReactComponent as LogoIcon } from 'images/logo/logo.svg';
import { ReactComponent as LogoIconSm } from 'images/logo/logo-mobile.svg';

import { useWindowSize } from 'hooks/useResize';
// import { LogoIcon, LogoIconSm } from 'shared/utils/icons';
import { LogoWrapper } from './Logo.styled';

const Logo = () => {
  const [screenWidth] = useWindowSize();

  return (
    <LogoWrapper to="/" aria-label="Site logo">
      {screenWidth <= 767 ? <LogoIconSm /> : <LogoIcon />}
    </LogoWrapper>
  );
};

export default Logo;
