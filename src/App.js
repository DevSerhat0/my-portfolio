import './App.css';
import Content from './components/Content';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div className="App">

      <main className="main-content">

        <ProfileImage />
        <Content />
      </main>
    </div>
  );
}

export default App;