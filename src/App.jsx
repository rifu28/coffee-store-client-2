import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <h1 className="text-center my-5 font-semibold text-3xl text-yellow-900">
        Coffee Collection
      </h1>
      <div className="grid md:grid-cols-3 w-full gap-14 mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
