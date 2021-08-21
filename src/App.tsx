import React from 'react';
import { RegValidation } from './components/RegValidation'
import { HtmlValidation } from './components/HtmlValidation';
import { NpmEmailValidator } from './components/NpmEmailValidator';

function App() {
  return (
    <div className="App">
      <RegValidation />
      <HtmlValidation />
      <NpmEmailValidator />
    </div>
  );
}

export default App;
