import './App.css';
import { SideBar } from "./components/sidebar/sidebar";
import { HeadBar } from "./components/headbar/headbar";
import { MainPage }from "./components/main/main";


function App() {
  return (
    <div className="App">
      <HeadBar/>
      <SideBar/>
      <MainPage/>
    </div>
  );
}

export default App;
