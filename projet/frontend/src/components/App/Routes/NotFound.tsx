import style from './NotFound.module.scss'

const NotFound: React.FC = () => {
  return (
    <main className={style.notfound}>
      <h1>404 - Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
    </main>
  );
}

export default NotFound;
