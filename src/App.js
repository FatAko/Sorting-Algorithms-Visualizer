import './App.css';
import {Bars} from './Bars';
import {descendingPos,randomPos,initializeArray} from './Initialization';
import {bubblesort,quicksortRun,heapsortRun,shellsortRun,insertionsortRun,selectionsortRun,bogosortRun} from './Sort';


function App() {
  window.onload = initializeArray;
  window.onload =  randomPos;
  return (
    <>
      <h1 id='test'>Sorting Algorithms Visualizer</h1>
      <div class="buttons1">
        <button onClick={descendingPos}>Descending</button>
        <button onClick={randomPos}>Random</button>
      </div>
      <div class="buttons2">
        <button onClick={bubblesort}>Bubblesort</button>
        <button onClick={quicksortRun}>Quicksort</button>
        <button onClick={heapsortRun}>Heapsort</button>
        <button onClick={shellsortRun}>Shellsort</button>
        <button onClick={insertionsortRun}>Insertionsort</button>
        <button onClick={selectionsortRun}>Selectionsort</button>
        <button onClick={bogosortRun}>Bogosort</button>
        </div>
      <div class="background">{Bars}</div>
        </>
  );
}
export default App;
