import React, { useEffect, useState } from "react";
import Terminal from "terminal-in-react";
import moment from "moment";

const Calculations = () => {
  const symbols = ["+", "-", "*", "%", "/"];
  const hasOperator = (str) => {
    symbols.some((val) => {
      return str.indexOf(val) !== -1;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Terminal
        color="white"
        backgroundColor="black"
        barColor="black"
        style={{ fontWeight: "bold", fontSize: "1em", marginRight: "10px" }}
        prompt="white"
        commandPassThrough={(cmd, print) => {
          let comm = cmd.join("");
          let index = hasOperator(comm);
          if (index && index !== -1) {
            console.log(eval(comm));
          } else {
            let date = moment();
            if (comm.toLowerCase() === "today") {
              console.log(date.format("DD-MM-YYYY"));
            } else if (comm.toLowerCase() === "tomorrow") {
              console.log(date.add(1, "day").format("DD-MM-YYYY"));
            } else if (comm.toLowerCase() === "yesterday") {
              console.log(date.subtract(1, "day").format("Do-MM-YYYY"));
            } else {
              // console.log(comm);
            }
          }
        }}
      />
      <Terminal
        color="white"
        backgroundColor="black"
        barColor="black"
        style={{ fontWeight: "bold", fontSize: "1em" }}
        watchConsoleLogging
        promptSymbol=""
      />
    </div>
  );
};

export default Calculations;
