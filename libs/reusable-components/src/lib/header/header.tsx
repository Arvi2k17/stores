
import './header.css';

/* eslint-disable-next-line */
export interface HeaderProps { }

export function Header(props: HeaderProps) {
  return (
    <div className="header">
      <h1>Welcome to Todo App!</h1>
    </div>
  );
}

export default Header;
