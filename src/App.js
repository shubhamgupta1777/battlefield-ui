import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Panel from './components/panel'

function App() {
  return (
    <div className='body'>
      <div className="overlay">
        <Sidebar />
        <Main/>
        <Panel/>
        
      </div>
    </div>
  );
}

export default App;
