/*import React from 'react'
import {useState} from 'react'

const Counter = () => {

  const [time, setTime] = useState({
    hour: "",
    minute: "",
    second: "",
  });

  const handleChange = (e, field) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    const copyTime={...time}

    copyTime[field]=value;
    setTime(copyTime);

    console.log(e.target.value, field);
  };
  return (
    <>
      <input
        value={time.hour}
        onChange={(e) => handleChange(e, "hour")}
        type="text"
        placeholder="HH"
      />
      <input
        value={time.minute}
        onChange={(e) => handleChange(e, "minute")}
        type="text"
        placeholder="MM"
      />
      <input
        value={time.second}
        onChange={(e) => handleChange(e, "second")}
        type="text"
        placeholder="SS"
      />
    </>
  );
}



export default Counter*/
