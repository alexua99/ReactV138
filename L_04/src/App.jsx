import Counter from "./components/Counter/Counter";
import Calc from "./components/Calc/Calc";

export default function App() {

  return (
    <div className="App">
      <h2>Counter</h2>
      <Counter />

      <h2>Inputs</h2>
      <Calc />

    </div>
  );
}


//  function countPlus() {
//     setNum(num + 1)
//   }


// let btn = document.createElement('button')
// btn.innerHTML = "start"
// btn.addEventListener('click', countPlus)


