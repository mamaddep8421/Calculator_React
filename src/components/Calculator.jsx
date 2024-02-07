import "./cssCalculator/appcssCalculator.css";
import { useState } from "react";
function CalCulaTor() {
  // کد زدن ماشین حساب
  const [result, setResult] = useState("0");
  const [total, setTotal] = useState("");
  //   تابع های مورد نیاز
  function getValue(e) {
    setResult(result + e.target.innerText);
  }
  return (
    <div className="Container">
      <main className="Container_MAIN">
        <div className="Input_Number">
          <input type="text" value={result}></input>
        </div>
        <div className="Row_btn1">
          <button onClick={() => setResult("")} className="btn_color4">
            Ac
          </button>
          <button onClick={getValue} className="btn_color4">
            *
          </button>
          <button onClick={getValue} className="btn_color4">
            +
          </button>
        </div>
        <div className="Row_btn1">
          <button onClick={getValue} className="btn_color">
            1
          </button>
          <button onClick={getValue} className="btn_color">
            2
          </button>
          <button onClick={getValue} className="btn_color">
            3
          </button>
        </div>
        <div className="Row_btn1">
          <button onClick={getValue} className="btn_color">
            4
          </button>
          <button onClick={getValue} className="btn_color">
            5
          </button>
          <button onClick={getValue} className="btn_color">
            6
          </button>
        </div>
        <div className="Row_btn1">
          <button onClick={getValue} className="btn_color">
            7
          </button>
          <button onClick={getValue} className="btn_color">
            8
          </button>
          <button onClick={getValue} className="btn_color">
            9
          </button>
        </div>
        <div className="Row_btn1">
          <button onClick={getValue} className="btn_color2">
            .
          </button>
          <button onClick={getValue} className="btn_color">
            0
          </button>
          <button onClick={getValue} className="btn_color2">
            -
          </button>
        </div>
        <div className="Row_btn1">
          <button onClick={getValue} className="btn_color2">
            /
          </button>
          <button
            onClick={() => setResult(result.slice(0, -1))}
            className="btn_color2"
          >
            cc
          </button>
          <button
            onClick={() => {
              setResult(eval(result));
            }}
            className="btn_color3"
          >
            =
          </button>
        </div>
      </main>
    </div>
  );
}
export default CalCulaTor;
