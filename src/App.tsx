import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataProvider from './contexts/dataProvider';
import HomePage from './pages/home';

function App() {
  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
    
  );
}

export default App;
