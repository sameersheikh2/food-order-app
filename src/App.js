import Header from "./components/Layout/Header";
import Meals from "./components/Meels/Meals";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
