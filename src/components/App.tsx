import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';
import StepInput from './StepInput';
import LastUpdated from './LastUpdated';

function App() {
  return (
    <div>
        <header>
          <h1>Counter — RTK variant</h1>
          <p>Minimal playground for comparing UI state managers</p>
        </header>

        <main>
          <CounterDisplay />
          <CounterControls />
          <StepInput />
          <LastUpdated />
        </main>

        <footer>
          RTK implementation. UI is intentionally minimal and manager-agnostic.
        </footer>
    </div>
  );
}

export default App;