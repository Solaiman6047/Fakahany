import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplesPage from './pages/ApplesPage';
import OrangesPage from './pages/OrangesPage';
import BananasPage from './pages/BananaPage';
import StrawberriesPage from './pages/Strawberries';


function App() {
  return <BrowserRouter>
    <Routes>
      <Route index element = {<HomePage />} />
      <Route path='/home' element = {<HomePage />} />
      <Route path='/apples' element = {<ApplesPage />} />
      <Route path='/oranges' element = {<OrangesPage />} />
      <Route path='/bananas' element = {<BananasPage />} />
      <Route path='/strawberry' element = {<StrawberriesPage />} />
    </Routes>
  </BrowserRouter>
}
export default App;