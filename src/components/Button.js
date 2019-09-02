import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
  state = {};

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Enviar';
  }

  renderButton(color) {
    return (
      <LanguageContext.Consumer>
        {value => (
          <button
            className="button"
            style={{
              background: `${value === 'english' ? color : 'peru'}`,
              marginTop: '2rem'
            }}
          >
            {this.renderSubmit(value)}
          </button>
        )}
      </LanguageContext.Consumer>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
