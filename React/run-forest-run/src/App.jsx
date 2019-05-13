import React from 'react';
import './App.scss';

//Import components
import Header from './components/Header/Header'
import Content from './components/Content/Content'

class App extends React.Component {
  render()  {
    return (
      <div>
        <Header />
        <Content />
      </div>

    );
  }
}
export default App;
