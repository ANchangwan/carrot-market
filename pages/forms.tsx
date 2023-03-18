import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, watch } = useForm();
  return (
    <form>
      <input {...register("username")} type="text" placeholder="Username" />
      <input {...register("email")} type="email" placeholder="email" />
      <input {...register("password")} type="password" placeholder="password" />
      <input {...register("submit")} type="submit" />
    </form>
  );
}
