// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import Head from './Component/Head';
import Store from './Component/Utils/Store';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from './Component/MainContainer';
import Watchpage from './Component/Watchpage';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "watch",
      element: <Watchpage />,
    }

  ]
}])

function App() {
  return (
    <Provider store={Store} >
      <div >
        <Head />
        <RouterProvider router={appRouter} />
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