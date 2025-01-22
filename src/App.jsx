import { useState } from "react";
import "./App.css";
import { SketchPicker } from "react-color";

function App() {
  const [currentColor, setCurrentColor] = useState("#ff6");
  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
  };

  const selectedStyle = {
    color: "black",
    backgroundColor: currentColor,
    height: "90px",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 3px gray",
    width: "215px",
    borderRadius: "25px",
  };

  const textStyle = {
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    height: "100px",
    padding: "15px",
  };

  const titleStyle = {
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    height: "100px",
  };

  return (
    <div>
      <h1 className="Title" style={titleStyle}>
        Color Picker
      </h1>
      <div className="Selected" style={selectedStyle}>
        <p className="Text" style={textStyle}>
          Selected Color:{currentColor}{" "}
        </p>
      </div>

      <SketchPicker color={currentColor} onChangeComplete={handleOnChange} />
    </div>
  );
}

export default App;
