import { useState } from 'react';
import './Description.css';
const Description = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [description, setDescription] = useState('');
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleProfession = (e) => {
    setProfession(e.target.value);
  };
  return (
    <>
      <div className="information">
        <div className="informationHeader">
          <input
            type="text"
            value={name}
            placeholder="Name.."
            onChange={handleName}
          />
          <input
            type="text"
            value={profession}
            placeholder="Profession.."
            onChange={handleProfession}
          />
        </div>
        <textarea
          className="descriptionText"
          placeholder="Description.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </>
  );
};

export default Description;
