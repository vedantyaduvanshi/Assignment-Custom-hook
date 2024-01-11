import React from 'react';
import useStorage from './useStorage'; 

const App = () => {
 
  const [text, setText] = useStorage('textInput');

  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>useStorage Hook Example</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Stored Value: {text}</p>
    </div>
  );
};

export default App;
