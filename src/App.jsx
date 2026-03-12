import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Ввімкнути {isDark ? 'світлу' : 'темну'} тему
    </button>
  );
};

const Card = () => (
  <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
    <h3>Проміжний компонент</h3>
    <ThemeButton />
  </div>
);

function App() {
  const { isDark } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#000',
    height: '100vh',
    padding: '20px',
    transition: '0.3s'
  };

  return (
    <div style={themeStyles}>
      <Card />
    </div>
  );
}

export default App
