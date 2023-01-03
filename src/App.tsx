import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';

function App() {
  return (
    <MovieContextProvider>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
          <ToggleThemeBtn />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </MovieContextProvider>
  );
}

export default App;
