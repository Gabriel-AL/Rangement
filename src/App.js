import { Routes, Route } from 'react-router-dom';
import './App.css';
import { RouteWrapper } from "./helpers";
import { Layout } from './layout';
import { Home, CallbackTwitter, OrderByHashtags, OrderManually } from './screens';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/callbackTwitter" element={<Home/>}/>
        <Route path="/orderByHashtags" element={<OrderByHashtags/>}/>
        <Route path="/orderManually" element={<OrderManually/>}/>
      </Route>
    </Routes>
  );
}

export default App;
