import Header from './UI/Header/Header';
import Navigation from './UI/Navigation/Navigation';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        <Navigation />
        <main>Main Container</main>
      </div>
    </>
  );
}

export default App;
