import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reservation">Reservation</NavLink>
      </nav>
    </header>
  );
};
