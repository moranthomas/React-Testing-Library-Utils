import logo from './logo.svg';
import './App.css';
//import Banner from './components/Banner/Banner';
//import { Switch, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

import { CompanyProvider } from "./contexts/CompanyContext";
import ParentDisplay from "./contexts/ParentDisplay"

function App() {
  return (
    <div className="App">
      <CompanyProvider>
        <ParentDisplay />
      </CompanyProvider>
    </div>
  );
}

export default App;
