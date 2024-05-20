import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/themeSlice";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(changeTheme(isChecked));
  };

  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className="relative w-11 h-6 bg-slate-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-1 
        peer-focus:ring-purple-400 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full 
        rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
        after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border 
        after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"
      ></div>
    </label>
  );
};

export default ToggleSwitch;
