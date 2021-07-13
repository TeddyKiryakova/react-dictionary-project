
import './App.css';
import  Dictionary  from "./Dictionary.js";

export default  function App() {
  return (
    <div className="App">
      <div className="container">
    <h1> DICTIONARY 📚</h1> 
    <main>
      <Dictionary />
    </main>
    <footer className="App-footer"> This project was created by Teodora Kiryakova and is {""}
   <a href="https://github.com/TeddyKiryakova/react-dictionary-project" target="_blank" rel="noreferrer">
     open-sourced on GitHub
   </a>
    </footer>
      </div>
    </div>
  );
}

