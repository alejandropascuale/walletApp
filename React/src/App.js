import React from 'react';
import Header from './components/Header';
import FormSearch from './components/FormSearch';
import Home from './components/home/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div id="body">
      <Header />
      <FormSearch />
      <Home />
      <Footer />
      <script src="/javascripts/index.js"></script>
      <script src="/javascripts/search.js"></script>
    </div>
  );
}

export default App;
