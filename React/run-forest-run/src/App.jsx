import React from 'react';
import './App.scss';

//Import components
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  render()  {
    return (
      <div>
        <Header />
        <Content />
        <Footer/>
      </div>

    );
  }
}
export default App;
