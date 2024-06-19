import { useEffect, useState } from "react";

export const useNavbarVisibility = (navbarHeight: number) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > navbarHeight
        ? setIsNavbarVisible(true)
        : setIsNavbarVisible(false);
    });
  }, [navbarHeight]);

  return { isNavbarVisible };
};
