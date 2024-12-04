import { useState } from 'react';
import './Education.css';
const Education = () => {
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  return (
    <>
      <div className="containerEducation">
        <h1 className="title">Education</h1>
        <input
          className="educationBox"
          type="text"
          value={schoolName}
          placeholder="School Name"
          onChange={(e) => setSchoolName(e.target.value)}
        />
        <input
          className="educationBox"
          type="text"
          value={titleOfStudy}
          placeholder="Title of Study"
          onChange={(e) => setTitleOfStudy(e.target.value)}
        />
        <input
          className="educationBox"
          type="text"
          value={dateOfStudy}
          placeholder="Date of Education (ex. 20/03/10 - 20/06/20125)"
          onChange={(e) => setDateOfStudy(e.target.value)}
        />
      </div>
    </>
  );
};
export default Education;
