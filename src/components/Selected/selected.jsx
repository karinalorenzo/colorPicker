import { SketchPicker } from "react-color";
import { useState } from "react";
import "./selected.css";

export default function Selected() {
  const [currentColor, setCurrentColor] = useState("#ff6");
  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
  };

  return (
    <div className="container">
      <div className="selected" style={{ backgroundColor: currentColor }}>
        <p className="text-selected">
          Selected Color:{currentColor}
          {""}
        </p>
      </div>

      <SketchPicker color={currentColor} onChangeComplete={handleOnChange} />
    </div>
  );
}
