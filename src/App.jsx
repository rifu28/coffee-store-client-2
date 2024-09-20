import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <h1>coffee serial:{coffees.length}</h1>
      <div className="grid grid-cols-3">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
