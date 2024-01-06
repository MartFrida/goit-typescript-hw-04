import React, { useState } from 'react';

export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}

