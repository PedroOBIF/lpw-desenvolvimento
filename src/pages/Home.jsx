import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <h2 className={styles.title}>Bem-vindo ao Eco Game!</h2>
      <p className={styles.description}>"Eco Game" é um projeto de desenvolvimento de um jogo de plataforma 
        em pixel art direcionado ao público infantojuvenil. Temos como principal propósito conscientizar sobre os principais problemas ambientais que acometem o Brasil, 
        utilizando a linguagem lúdica dos videogames para engajar e educar os jogadores.
      </p>
    </div>
  );
}  