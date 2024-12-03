import { useState } from 'react';
import './App.css';
import { Description, ImagePicker } from './components';

export default function App() {
  return (
    <div className="body">
      <div className="header">
        <ImagePicker />
        <Description />
      </div>
    </div>
  );
}
