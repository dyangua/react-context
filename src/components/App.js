import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import Controllers from './Controllers';

class App extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div className="container">
        <div>
          <LanguageStore>
            <Controllers />
            <ColorContext.Provider value="papayawhip">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
      </div>
    );
  }
}

export default App;
