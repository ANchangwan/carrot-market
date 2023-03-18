import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {
    console.log("유효");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="Username"
      />
      <input
        {...(register("email"), { required: true })}
        type="email"
        placeholder="email"
      />
      <input
        {...(register("password"), { required: true })}
        type="password"
        placeholder="password"
      />
      <input {...register("submit")} type="submit" />
    </form>
  );
}
