import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <h2 className={styles.title}>Bem-vindo ao Eco Game!</h2>
      <p className={styles.description}>Um jogo sobre a importância de preservar a natureza.</p>
    </div>
  );
}