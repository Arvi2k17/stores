import styles from './app.module.css';
import { Header } from '@stores/reusable-components'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
