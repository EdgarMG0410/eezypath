import './App.css';
//import { SideBar } from "./components/sidebar/sidebar";
import { HeadBar } from "./components/headbar/headbar";
import { SideBarCollapse } from './components/sidebar-collapse/sidebar-collapse';
import { CategoryBox } from './components/category-box/category-box';
import Dashboard from './components/dash/dash';


function App() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
    setOpen(!open);
  return (
    <div className="App">
      <HeadBar/>
      <div className='App__container'>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;


