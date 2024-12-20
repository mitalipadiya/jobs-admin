import HeaderIcon from '../HeaderIcon/HeaderIcon';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <HeaderIcon />
        <h1 className={styles.headerText}>Jobs Portal</h1>
      </div>
    </header>
  );
};

export default Header;
