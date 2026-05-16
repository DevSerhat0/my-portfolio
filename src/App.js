import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div className="App">

      <main className="main-content">

        <ProfileImage />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;