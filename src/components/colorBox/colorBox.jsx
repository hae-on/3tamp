import React from "react";
import styles from "./colorBox.module.css";

const ColorBox = (props) => {
  const color = [
    { key: "red", value: "#ff98a5" },
    { key: "orange", value: "#ffdcb0" },
    { key: "yellow", value: "#fff88d" },
    { key: "green", value: "#b9ffbd" },
    { key: "blue", value: "#ace8ff" },
    { key: "purple", value: "#d4b4ff" },
    { key: "pink", value: "#ffd1d5" },
  ];

  return (
    <>
      <div className={styles.color_box}>
        {color.map((colors) => (
          <div
            onClick={() => {
              props.setColor(colors.key);
            }}
            key={colors.key}
            className={styles.color}
            style={{ background: colors.value, border: "1px solid black" }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ColorBox;
