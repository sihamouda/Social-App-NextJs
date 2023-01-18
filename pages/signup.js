import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import NotifContext from "../src/context/notif";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const { notif, setNotif, notify } = useContext(NotifContext);

  useEffect(() => {
    console.log(notif);
    if (notif.msg == "ok") {
      notify();
    }
  }, [notif]);

  return (
    <div className="grid grid-cols-3 ">
      <form
        className="col-start-2 col-end-2 "
        onSubmit={handleSubmit((data) => {
          setNotif({ msg: "ok", time: Date.now() });
          // console.log(notif);
        })}
      >
        <div>
          <label>Username</label>
          <input
            className="border-solid border-2"
            {...register("username", { required: true, maxLength: 20 })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            className="border-solid border-2"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="border-solid border-2"
            {...register("password", { required: true, minLength: 5 })}
          />
        </div>
        <div>
          <label>Re-type password</label>
          <input
            type="password"
            className="border-solid border-2"
            {...register("re-password", { required: true, minLength: 5 })}
          />
        </div>
        <div>
          <input className="border-solid border-2 bg-green-400" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
