import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataProvider from './contexts/dataProvider';
import HomePage from './pages/home';
import ErrorBoundary from './components/errorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <DataProvider>
      <HomePage />
    </DataProvider>
    </ErrorBoundary>
  );
}

export default App;
