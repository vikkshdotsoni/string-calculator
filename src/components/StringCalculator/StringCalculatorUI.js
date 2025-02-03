import React, { useRef, useState } from "react";
import styles from "./StringCalculator.module.css"; // Import module.css
import { add } from "./stringCalculator.js";

function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  //used for dynamic error highlight
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(inputRef.current.innerText);

    if (isEmpty && inputRef.current.innerText.trim()) {
      setIsEmpty(false);
      setError(null);
      inputRef.current.textContent = inputRef.current.innerText;
    }
  };

  const highlightNegatives = (text) => {
    return text.replace(
      /(-\d+)/g,
      '<span class="' + styles.highlighted + '">$1</span>'
    );
  };

  const handleCalculate = () => {
    if (!input.trim()) {
      setIsEmpty(true);
      return;
    }

    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
      inputRef.current.innerHTML = highlightNegatives(input);
    }
  };

  return (
    <div className={styles.calculator}>
      <h1 className={styles.title}>String Calculator</h1>
      <div className={styles.calculatorContainer}>
        <div
          id="editableInput"
          contentEditable
          ref={inputRef}
          onInput={handleInputChange}
          className={`${styles.inputBox} ${isEmpty ? styles.inputError : ""}`}
        ></div>

        <button onClick={handleCalculate} className={styles.calculateButton}>
          Calculate
        </button>
        <div className={styles.result}>
          {error ? (
            <p className={styles.errorMessage}>{error}</p>
          ) : (
            <p className={styles.successMessage}>Result: {result}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StringCalculator;
