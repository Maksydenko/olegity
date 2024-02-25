import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectToHomepage = () => {
  const [time, setTime] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        navigate("/");
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time, navigate]);

  return time;
};
