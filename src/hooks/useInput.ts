import React, { useState } from "react";

export default (initialValue: any) => {
  const [state, setState] = useState(initialValue);

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return [state, handler, setState];
};
