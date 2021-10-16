import React from 'react';
import Header from './Header';
import FormSearch from './FormSearch';
import Home from './home/Home';
import Footer from './Footer';



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
