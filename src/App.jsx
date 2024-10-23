import Bannar from "./components/Bannar";
import Header from "./components/Header";
import Recepies from "./components/Recepies";
import RecepiesCard from "./RecepiesCard";
import SideBar from "./SideBar";

const App = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <Bannar></Bannar>
      <Recepies></Recepies>

      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <RecepiesCard></RecepiesCard>
        <SideBar></SideBar>
      </div>
      
    </div>
  );
};

export default App;