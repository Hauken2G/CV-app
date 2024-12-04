import { useState } from 'react';
import './App.css';
import { Description, Education, Experience, ImagePicker } from './components';

export default function App() {
  return (
    <div className="body">
      <div className="header">
        <ImagePicker />
        <Description />
      </div>
      <div className="midSection">
        <Experience />
        <Education />
      </div>
    </div>
  );
}
