import { useState, useEffect } from "react";

export default function RandomAdviceRendering() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice)
        console.log(data.slip.advice);
      })
      .catch((err) => console.error(err));
  }, [loading]);

  return (
    <div>
      <h1>Random Advice</h1>
      <p>{advice}</p>
      <button
        onClick={() => {
          setLoading(!loading);
        }}
      >
        random advice
      </button>
    </div>
  );
}
