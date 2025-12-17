import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import App from './components/App';
import { Profiler } from 'react';

const handleRender = (
  id: string,
  phase: 'mount' | 'update' | "nested-update",
  actualDuration: number
) => {

  if (phase === 'mount') {
    console.log(`Первый рендер (${id}) занял: ${actualDuration.toFixed(2)} ms`);
  }

  if (phase === 'update') {
    console.log(`Обновление (${id}) заняло: ${actualDuration.toFixed(2)} ms`);
  }
};

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Profiler id="App" onRender={handleRender}>
      <App />
    </Profiler>
  </Provider>
);

