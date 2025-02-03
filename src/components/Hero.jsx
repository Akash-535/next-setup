"use client";
import React, { useState } from "react";
import { NUMBER_LIST, OPRETOR_SYMBOL_LIST } from "@/utils/helper";

const Hero = () => {
  const [input, setInput] = useState("");

  const handleText = (number) => {
    setInput(input + number);
  };

  const handleSymbol = (operator) => {
    setInput(input + " " + operator + " ");
  };

  const handleResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleReset = () => {
    setInput("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-5">
      <div className="border border-black rounded-xl w-96 h-[500px] bg-white shadow-lg p-5">
        <input
          className="w-full h-20 border border-black rounded-xl text-right pr-4 text-xl text-black placeholder:text-black"
          type="text"
          value={input}
          placeholder="0"
          disabled
        />
        <div className="flex flex-wrap w-full gap-4 pt-5 text-black max-md:gap-2">
          {NUMBER_LIST.map((num) => (
            <button
              key={num}
              onClick={() => handleText(num)}
              className="w-16 h-11 border border-black rounded-xl"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleReset}
            className="w-16 h-11 border border-black rounded-xl"
          >
            C
          </button>
          <button
            onClick={handleResult}
            className="w-16 h-11 border border-black rounded-xl"
          >
            =
          </button>
          {OPRETOR_SYMBOL_LIST.map((obj) => (
            <button
              key={obj}
              onClick={() => handleSymbol(obj)}
              className="w-16 h-11 border border-black rounded-xl"
            >
              {obj}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
