import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectToHomepage = () => {
  const [time, setTime] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (time <= 0) {
      navigate("/");
    } else {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return time;
};
