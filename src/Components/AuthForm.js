import React from "react";
import { useForm } from "react-hook-form";
//import GoogleOutlined from "@ant-design/icons/GoogleOutlined";

export default function AuthForm() {
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
      <div className="signIn_social">
        <div className="signup_google">
          <button className="button_google">
            <img
              src="https://miro.com/static/images/signup/v2/google-g-logo-3.svg?cbh=7b31665a03d5b1c8a3d3eea5418e7519"
              alt="Google"
            />
            <p>Se connecter avec Google</p>
          </button>
        </div>
        <div className="signIn_facebook">
          <button className="button_facebook">
            <img
              src="https://miro.com/static/images/signup/v2/f-icon.svg?cbh=8730bf0aa763e55adbdfb6fa54a86b28"
              alt="Facebook"
            />
            <p>Se connecter avec Facebook</p>
          </button>
        </div>
      </div>
      <h3>ou connectez-vous avec votre adresse mail personnel</h3>
      <div className="signIn_personnal">
        {/* register your input into the hook by invoking the "register" function */}
        <input
          type="text"
          name="email"
          className="inputAuth"
          placeholder="Adresse mail personnel"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && (
          <span className="message_required">This field is required</span>
        )}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="text"
          name="password"
          className="inputAuth"
          placeholder="Mot de passe"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className="message_required">This field is required</span>
        )}

        <input className="connect" type="submit" value="Se connecter" />
      </div>
    </form>
  );
}
