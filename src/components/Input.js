// import React from 'react';

export default function Input ({ label, cls }) {
  const resLabel = (str) => {
    return str.replace(/\w\S*/g, function (word) {
      const newWord = word.slice(0, 1).toUpperCase() + word.substr(1);
      return newWord;
    });
  };
  return (
  <div className={`text-start input-section ${cls}`}>
    <label className='text-start fw-bold pb-3'>{resLabel(label)}:</label>
    <div>
      <input placeholder={`Enter your ${label}`} />
    </div>
  </div>
  );
}
