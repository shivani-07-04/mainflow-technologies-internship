import React from 'react';
import './App.css';
import MyImageGallery from './ImageGallery';  // Use the new MyImageGallery component

function App() {
  return (
    <div className="App">
      <h1>Enhanced Image Gallery</h1>
      <MyImageGallery />  {/* Display the enhanced gallery */}
    </div>
  );
}

export default App;
