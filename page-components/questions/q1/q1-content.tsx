import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import styleSheet from "@/styles/dist/q1-content.module.css";
import q1Validator from "@/_utils/q1-validator";
import q1Calculator from "@/_utils/q1-calculator";

const Q1Content: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [result, isPending, refreshDelay] = useDebounce(() => {
    // validate input
    const validation = q1Validator(input);
    if (validation !== "OK") {
      setError(validation);
      setOutput("");
    } else {
      setError("");
      setOutput(q1Calculator(input));
    }
  }, 200);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    refreshDelay();
  };

  return (
    <div className="w-4/6 m-auto">
      <input
        type="text"
        className={`py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
          error && styleSheet.error
        } ${styleSheet.input}`}
        placeholder="Enter the N"
        value={input}
        onChange={handleChange}
      />

      <i className={styleSheet.errorBox}>
        {error && <small className={styleSheet.errorMessage}>{error}</small>}
      </i>

      <div className="text-gray-600 my-4">
        Output:{" "}
        <b className={`${styleSheet.output} text-3xl`}>
          <br />
          {output ? String(output) : ""}
        </b>
      </div>
    </div>
  );
};

export default Q1Content;
