import React from "react";
import { useForm } from "react-hook-form";
//import GoogleOutlined from "@ant-design/icons/GoogleOutlined";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Connectez-vous</h1>
      <div className="signup_social">
        <button className="signup_google">
          <img src="https://miro.com/static/images/signup/v2/google-g-logo-3.svg?cbh=7b31665a03d5b1c8a3d3eea5418e7519" alt="Google"/>
          Se connecter avec Google
        </button>
        <button className="signup_facebook">
          <img src="https://miro.com/static/images/signup/v2/f-icon.svg?cbh=8730bf0aa763e55adbdfb6fa54a86b28" alt="Facebook" />
          Se connecter avec facebook
        </button>
      </div>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="inputAuth" placeholder="Adresse mail personnel" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input className="inputAuth" placeholder="Mot de passe" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
