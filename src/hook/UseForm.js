import React, { useState } from 'react'

const UseForm = (iniState = {}) => {
   const [data, setData] = useState(iniState);
   const reset = () => setData(iniState);

   const handleChange = ({ target }) => setData({
      ...data,
      [target.name]: target.value
   });

   return [data, handleChange, reset]
}

export default UseForm