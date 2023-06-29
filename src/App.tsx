import { useState } from 'react';
import { Provider } from 'react-redux';
import '../src/assets/fonts/style.css';
import store from './store';
import SearchHero from './components/SearchHero';
import Header from './components/Header';

function App() {
  const [page, setPage] = useState(1);

  return (
    <Provider store={store}>
      <div className="App">

        <Header
          page={page}
          setPage={setPage}
        />
        <SearchHero />
      </div>
    </Provider>
  );
}

export default App;
