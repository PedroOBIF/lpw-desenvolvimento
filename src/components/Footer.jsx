import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Eco Game</p>
      <p>
        Arte por <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">macrovector / Freepik</a>
      </p>
    </footer>
  );
}  