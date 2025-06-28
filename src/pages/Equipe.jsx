import MembroCard from '../components/MembroCard';
import styles from './Equipe.module.css';

const membros = [
  {
    nome: 'Lucas Gabriel',
    github: 'Lucas-Gabriel-14',
    descricao: 'Responsável pelo layout e interface do usuário.'
  },
  {
    nome: 'Marques Vieira',
    github: 'MarquesVC',
    descricao: 'Programação da navegação entre telas e estrutura geral.'
  },
  {
    nome: 'Pedro Oliveira',
    github: 'bdpedroka',
    descricao: 'Design do jogo e escolha da paleta de cores.'
  },
  {
    nome: 'William Campos',
    github: 'WilliamMaq2',
    descricao: 'Desenvolvimento e integração do conteúdo com React.'
  }
];

export default function Equipe() {
  return (
    <div className={styles.container}>
      <h2>Equipe do Projeto</h2>
      <div className={styles.lista}>
        {membros.map((membro, i) => (
          <MembroCard
            key={i}
            nome={membro.nome}
            github={membro.github}
            descricao={membro.descricao}
          />
        ))}
      </div>
    </div>
  );
}