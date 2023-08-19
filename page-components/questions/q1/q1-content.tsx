import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import styleSheet from "@/styles/dist/q1-content.module.css";
import q1Validator from "@/_utils/q1-validator";
import q1Calculator from "@/_utils/q1-calculator";

const Q1Content: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [inputForCal, setInputForCal] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // Update the input for calculation after the delay
    if (currentTimeout) clearTimeout(currentTimeout);

    const newTimeout = setTimeout(() => setInputForCal(value), 200); // Delay time in milliseconds
    setCurrentTimeout(newTimeout);
  };

  useEffect(() => {
    // Perform the calculation when the input for calculation changes
    if (currentTimeout) {
      // validate input
      const validation = q1Validator(inputForCal);
      if (validation !== "OK") {
        setError(validation);
        setOutput("");
      } else {
        setError("");
        setOutput(q1Calculator(inputForCal));
      }
    }
  }, [inputForCal]);

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
        Output: <b className="text-3xl"> {output ? String(output) : ""}</b>
      </div>
    </div>
  );
};

export default Q1Content;
