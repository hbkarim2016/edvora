import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ApiUser from "./content/apis/ApiUser";
import Filter from "./content/components/Filter/Filter";
import Header from "./content/components/Header/Header";
import Rides from "./content/components/Rides/Rides";

function App() {

  const dispatch = useDispatch();

  const apiUserHandle = () => {
    ApiUser(dispatch)
  }

  useEffect(
    () => {
      try{
        apiUserHandle()
      }catch(err){
        console.log(err)
      }
    }
  ,[])

  return (
    <div className="App">
      <Header />
      <Filter />
      <Rides />
    </div>
  );
}

export default App;
