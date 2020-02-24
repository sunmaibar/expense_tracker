import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <h3> 新增項目 </h3>{" "}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"> 名稱 </label>{" "}
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="請輸入名稱..."
          />
        </div>{" "}
        <div className="form-control">
          <label htmlFor="amount">
            金額 <br />
            (花費請用複數符號像是 -30){" "}
          </label>{" "}
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="請輸入金額..."
          />
        </div>{" "}
        <button className="btn"> 新增項目 </button>{" "}
      </form>{" "}
    </>
  );
};
