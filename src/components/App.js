import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    };
  }

  onLanguageChange = language => {
    this.setState({
      language
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h5 style={{ marginTop: '3rem' }}>
            Select your language : {this.state.language.toUpperCase()}
          </h5>
          <button
            onClick={() => this.onLanguageChange('english')}
            className="button button-primary"
            style={{ marginRight: '3rem' }}
          >
            English
          </button>
          <button
            onClick={() => this.onLanguageChange('spanish')}
            className="button"
          >
            Spanish
          </button>
          <ColorContext.Provider value="papayawhip">
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
