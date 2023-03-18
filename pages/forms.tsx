import { useForm, FieldError } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onBlur" });
  const onValid = (data: LoginForm) => {
    console.log(data);
  };
  const onInvalid = (errors: FieldError) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "this is error",
          minLength: { message: "5글장 이상 적어주세요", value: 5 },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "this is error",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="email"
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "this is error" })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="계정 생성" />
    </form>
  );
}
