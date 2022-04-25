import './App.css';
import { SideBar } from "./components/sidebar/sidebar";
import { HeadBar } from "./components/headbar/headbar";
import { SideBar__Collapse } from './components/sidebar-collapse/sidebar-collapse';


function App() {
  return (
    <div className="App">
      <HeadBar/> 
      <SideBar/>
    </div>
  );
}

export default App;
