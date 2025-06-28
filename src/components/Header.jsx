import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Eco Game</h1>
      <nav className={styles.navLinks}>
        <Link to="/">Início</Link>
        <Link to="/historia">História do Jogo</Link>
        <Link to="/equipe">Equipe</Link>
      </nav>
    </header>
  );
}
