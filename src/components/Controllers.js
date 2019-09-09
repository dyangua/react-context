import React from 'react';
import LanguateStore from '../context/LanguageContext';

class Contolers extends React.Component {
  static contextType = LanguateStore;
  render() {
    console.log(this.context);
    return (
      <div>
        <h5 style={{ marginTop: '3rem' }}>
          Select your language : {this.context.language.toUpperCase()}
        </h5>
        <button
          onClick={() => this.context.onLanguageChange('english')}
          className="button button-primary"
          style={{ marginRight: '3rem' }}
        >
          English
        </button>
        <button
          onClick={() => this.context.onLanguageChange('spanish')}
          className="button"
        >
          Spanish
        </button>
      </div>
    );
  }
}

export default Contolers;
