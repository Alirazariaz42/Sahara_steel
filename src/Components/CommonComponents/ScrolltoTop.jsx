import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrolltoTop = () => {
  const Pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Pathname]);

  return null;
};
