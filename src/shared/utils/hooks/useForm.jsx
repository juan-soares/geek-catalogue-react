import { useState } from "react";

export default function useForm() {
  function handleChange(e, inputValues, setInputValues) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e, inputValues, setInputValues, url) {
    e.preventDefault();

    const confirm = window.confirm("Deseja salvar?");

    if (!confirm) return null;

    const res = await fetch(`${process.env.REACT_APP_API}/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    });

    const { message } = await res.json();

    window.alert(message);

    console.log(inputValues);

    let resetValues = {};
    Object.keys(inputValues).forEach((key) => (resetValues[key] = ""));
    setInputValues(resetValues);
  }

  return { handleChange, handleSubmit };
}
