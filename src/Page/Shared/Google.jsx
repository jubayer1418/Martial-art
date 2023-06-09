import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Google = () => {
  const { handlegoogle, setLoading } = useContext(AuthContext);
  const navigete = useNavigate();
  const handlegooglelogin = () => {
    handlegoogle()
      .then((result) => {
        const name = result.user.displayName;
        console.log(name);
        const email = result.user.email;
        const role = "student";
        const saveUser = { name, email, role };
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        }).catch((err) => {
          setLoading(false);
          console.log(err.message);
        });

        navigete("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <span
      onClick={handlegooglelogin}
      className="bg-[#E0B573] hover:text-white hover:bg-[#ff9900] flex items-center justify-center cursor-pointer  text-[#110C04] font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
    >
      <FaGoogle></FaGoogle>
      <span className="ml-2">Sign in with Google</span>
    </span>
  );
};

export default Google;
