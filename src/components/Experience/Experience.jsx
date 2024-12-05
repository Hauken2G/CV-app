import { useState } from 'react';
import './Experience.css';
const Experience = () => {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [dateOfWork, setDateOfWork] = useState('');
  const [moreDetails, setMoreDetails] = useState('');
  return (
    <>
      <div className="containerExperience">
        <h2 className="titleExperience">Experience</h2>
        <input
          className="company"
          type="text"
          value={companyName}
          placeholder="Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          className="company"
          type="text"
          value={positionTitle}
          placeholder="Position Title"
          onChange={(e) => setPositionTitle(e.target.value)}
        />
        <input
          className="company"
          type="text"
          value={dateOfWork}
          placeholder="Date of Work (ex. 19/08/98 - 20/06/2012)"
          onChange={(e) => setDateOfWork(e.target.value)}
        />
        <textarea
          className="details"
          placeholder="More Details.."
          value={moreDetails}
          onChange={(e) => setMoreDetails(e.target.value)}
        />
      </div>
    </>
  );
};
export default Experience;
