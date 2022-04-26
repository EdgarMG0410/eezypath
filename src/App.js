import './App.css';
import { SideBar } from "./components/sidebar/sidebar";
import { HeadBar } from "./components/headbar/headbar";
import { SideBar__Collapse } from './components/sidebar-collapse/sidebar-collapse';
import { CategoryBox } from './components/category-box/category-box';


function App() {
  return (
    <div className="App">
      <HeadBar/>
      <div className='App__container'>
        <SideBar/>
        <CategoryBox/>
      </div>
    </div>
  );
}

export default App;
