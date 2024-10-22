import Bannar from "./components/Bannar";
import Header from "./components/Header";
import Recepies from "./components/Recepies";

const App = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <Bannar></Bannar>
      <Recepies></Recepies>
      
    </div>
  );
};

export default App;