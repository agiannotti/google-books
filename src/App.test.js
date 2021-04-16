import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
<<<<<<< HEAD
});
=======
});
>>>>>>> 36e0e6934fb8f23e2acea2ec723f5241fa2aeb33
