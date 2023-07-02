import { Provider } from 'react-redux';
import '../src/assets/fonts/style.css';
import store from './store';
import AppContent from './components/AppContent';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <AppContent />
      </div>
    </Provider>
  );
}

export default App;
