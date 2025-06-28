import styles from './MembroCard.module.css';

export default function MembroCard({ nome, github, descricao }) {
  const avatar = `https://github.com/${github}.png`;

  return (
    <div className={styles.card}>
      <img src={avatar} alt={`Foto de ${nome}`} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
        @{github}
      </a>
    </div>
  );
}
