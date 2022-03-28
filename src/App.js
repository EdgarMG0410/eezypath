import './App.css';
import { SideBar } from "./components/sidebar/sidebar";
import { HeadBar } from "./components/headbar/headbar";
import { MainPage }from "./components/main/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <HeadBar/>
      <i class="fa-regular fa-house-user"></i>
      <SideBar/>
      <MainPage/>
    </div>
  );
}

export default App;
