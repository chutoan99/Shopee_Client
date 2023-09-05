//? LIBRARY
import { memo } from 'react';
//? APPS
import { HeaderNavbar, HeaderWithSearch } from '../index';

function Header() {
  return (
    <header className="h-[120px] bg-[linear-gradient(0,#fe6433,#f53e2d)] fixed z-10 top-0 inset-x-0">
      <div className="grid wide flex-col justify-between h-full" style={{ display: 'flex' }}>
        <HeaderNavbar />
        <HeaderWithSearch />
      </div>
    </header>
  );
}
export default memo(Header);
