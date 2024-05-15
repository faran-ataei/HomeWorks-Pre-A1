import Cards from "./components/a-real-component/Card";
import Alert from "./components/alert-component/Alert";
import { Data } from "./components/building-a-layout/Data.jsx";
import { MapMethode } from "./components/maping-array-objects-to-li/mapMethod.jsx";
import { PlanetsList } from "./components/maping-array-of-objects-to-li/app.jsx";
import { Pokedex } from "./components/props-component-architecture/Pokedex.jsx";
import { CustomerInformation } from "./components/rendering-from-objects/app.jsx";

function App() {
  const animalsName = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  return (
    <>
      <Cards />

      <Alert text="OMG! Something really good has happened!" />

      <Data
        image="https://kelvinokaforart.com/wp-content/uploads/2023/01/Bob-Dylan.jpg"
        cardTitle="Bob Dylan"
        url="https://en.wikipedia.org/wiki/Bob_Dylan"
        cardDescription="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades."
        label="Go to wikipedia"
      />

      <MapMethode animals={animalsName} />
      <PlanetsList />

      <Pokedex />

      <CustomerInformation/>
    </>
  );
}

export default App;
