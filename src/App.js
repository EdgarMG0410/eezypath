import './App.css';
import { SideBar } from "./components/sidebar/sidebar";
import { HeadBar } from "./components/headbar/headbar";
import { SideBarCollapse } from './components/sidebar-collapse/sidebar-collapse';


function App() {
  return (
    <div className="App">
      <HeadBar/>
      <div className='App__container'>
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
