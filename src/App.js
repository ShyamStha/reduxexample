import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import PostForm from './PostForm';
import { Provider } from 'react-redux';
import store from './store';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
