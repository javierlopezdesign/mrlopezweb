// Style
import './static/sass/style.sass';

// Components
import Header from './header.js';
import ContactMessage from './contactMessage.js';


function App() {
  return (
    <div className="App">
      <Header />
      <ContactMessage />
    </div>
  );
}

export default App;
