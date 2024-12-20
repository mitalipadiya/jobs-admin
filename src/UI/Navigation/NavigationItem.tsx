import styles from './NavigationItem.module.css';

interface NavigationItemTypes {
  label: string;
}
const NavigationItem = ({ label }: NavigationItemTypes) => {
  return <li className={styles.li}>{label}</li>;
};

export default NavigationItem;
