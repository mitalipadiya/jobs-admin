import styles from './Navigation.module.css';
import NavigationItem from './NavigationItem';

const navigationItems = ['Companies', 'Jobs', 'Users'];
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {navigationItems.map((navItem, index) => {
          return <NavigationItem key={index} label={navItem} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
