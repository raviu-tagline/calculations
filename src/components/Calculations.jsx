import React from "react";
import Terminal from "terminal-in-react";
import moment from "moment";

const Calculations = () => {
  const symbols = ["+", "-", "*", "%", "/"];
  const tokens = [
    "today",
    "tomorrow",
    "yesterday",
    "days",
    "week",
    "year",
    "month",
  ];
  const hasOperator = (str) => {
    return symbols.some((val) => str.indexOf(val));
  };

  const hasTokens = (str) => {
    return tokens.some((val) => str.indexOf(val));
  };

  const chkString = (str) => {
    let tknIndex = hasTokens(str);
    let oprtrIndex = hasOperator(str);

    if (tknIndex && oprtrIndex) {
      let date = moment();
      let operator = str[str.indexOf("+")];
      let num = str.match(/(\d+)/);
      let unit = str.match(/days|years|months|day|year|month/g);
      if (!operator && !unit) {
        switch (str.toLowerCase()) {
          case "today":
            console.log(date.format("DD/MM/YYYY"));
            break;
          case "yesterday":
            console.log(date.subtract(1, "day").format("DD/MM/YYYY"));
            break;

          case "tomorrow":
            console.log(date.add(1, "day").format("DD/MM/YYYY"));
            break;

          case "time":
            console.log(date.format("hh:mm"));
            break;
          default:
            console.log(`default`, str);
            break;
        }
      } else {
        switch (operator) {
          case "+":
            console.log(date.add(num?.[0], unit?.[1]).format("DD/MM/YYYY"));
            break;
          case "-":
            console.log(date.subtract(1, "day").format("DD/MM/YYYY"));
            break;
          default:
            console.log(`default`, str);
            break;
        }
      }
    } else if (oprtrIndex) {
      console.log(eval(str));
    } else {
      console.log(`Invalid expression`);
    }
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
        commandPassThrough={(cmd) => {
          let comm = cmd.join("");
          // let index = hasOperator(comm);
          // let today = moment().format("DD/MM/YYYY");
          // let yesterday = moment().subtract(1, "days").format("DD/MM/YYYY");
          // let tomorrow = moment().add(1, "days").format("DD/MM/YYYY");

          chkString(comm);

          // if (index && index !== -1) {
          //   console.log(eval(comm));
          // } else {
          //   if (comm.toLowerCase() === "today") {
          //     console.log(today);
          //   } else if (comm.toLowerCase() === "tomorrow") {
          //     console.log(tomorrow);
          //   } else if (comm.toLowerCase() === "yesterday") {
          //     console.log(yesterday);
          //   } else {
          //     console.log(comm);
          //   }
          // }
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
