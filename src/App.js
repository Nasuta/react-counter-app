// Initial Code:

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Heading from "./components/Heading";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="React Counter" classValue="heading" />
      </header>
      <Counter counterInitValue={1} />
    </div>
  );
}

export default App;
