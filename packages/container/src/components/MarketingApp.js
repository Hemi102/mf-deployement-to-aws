import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
  console.log("marketing rendered!");
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
