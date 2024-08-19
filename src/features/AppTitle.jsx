import React, { useEffect, useState } from "react";
import { PiSunHorizon } from "react-icons/pi";
import { PiCloudMoonBold } from "react-icons/pi";

function AppTitle() {
  const [checked, setChecked] = useState(false);

  const toggleDarkMode = () => {
    if (checked) {
      setChecked(false);
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      setChecked(true);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (
      (darkMode && darkMode === "enabled") ||
      (!darkMode && prefersDarkMode)
    ) {
      document.documentElement.classList.add("dark");
      setChecked(true);
    }
  }, []);

  return (
    <div className="bg-modalLight dark:bg-backgroundTitle text-primaryLight dark:text-primary  flex items-center justify-center py-2">
      <h1 className="md:text-xl md:font-bold">
        Inventory App using tailwind & React.js
      </h1>
      <button
        className="ml-10 text-2xl "
        type="button"
        onClick={toggleDarkMode}
      >
        <PiSunHorizon className=" block dark:hidden" />
        <PiCloudMoonBold className=" hidden dark:block" />
      </button>
    </div>
  );
}

export default AppTitle;
