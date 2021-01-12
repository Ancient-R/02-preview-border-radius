import React, { useState } from 'react';
import BorderComponent from './components/BorderComponent';
import BorderPreview from './components/BorderPreview';

function App() {

  const [borders, setBorders] = useState({
    topLeft: '',
    topRight: '',
    bottomLeft: '',
    bottomRight: ''
  });

  return (
    <div className="container">
      <BorderComponent 
        borders={ borders }
        setBorders={ setBorders }
      />
      <BorderPreview 
        borders={ borders }
      />
    </div>
  );
}

export default App;
