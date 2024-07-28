// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import Head from './Component/Head';
import Store from './Component/Utils/Store';

function App() {
  return (
    <Provider store={Store} >
      <div >
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;


/**
       *
       * Head
       * Body
       *  Sidebar
       *    MenuItems
       *  MainContainer
       *    ButtonsList
       *    VideoContainer
       *      VideoCard
       *
       *
       */