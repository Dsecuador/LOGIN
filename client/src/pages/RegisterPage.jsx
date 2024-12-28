function RegisterPage() {
  return (
    <div>
      <h1>Register Page Activo</h1> 
    </div>
  );
}

export default RegisterPage;

/*import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { userNavigate } from "react-router-dom";

function RegisterPage() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const { signup, isAuthenticated } = useAuth();
  const navigate = userNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/task");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { requiered: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Usuario"
        />

        {errors.username && (
          <p className="text-red-500">Usuario es requerido</p>
        )}

        <input
          type="email"
          {...register("email", { requiered: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="email"
        />

        {errors.email && <p className="text-red-500">email es requerido</p>}

        <input
          type="password"
          {...register("password", { requiered: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="password"
        />

        {errors.password && (
          <p className="text-red-500">Password es requerido</p>
        )}

        <button type="submit">Registro</button>
      </form>
    </div>
  );
}

export default RegisterPage;*/
