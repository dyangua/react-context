import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
  state = {};
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Nombre';

    return (
      <div className="row">
        <div className="six columns">
          <label htmlFor="exampleEmailInput">{text}</label>
          <input className="u-full-width" type="email" id="exampleEmailInput" />
        </div>
      </div>
    );
  }
}

export default Field;
