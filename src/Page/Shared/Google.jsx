import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Google = () => {
  const { user, handlegoogle } = useContext(AuthContext);
  const navigete = useNavigate();
  const handlegooglelogin = () => {
    handlegoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigete("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    s;
  };
  return (
    <span
      onClick={handlegooglelogin}
      className="bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
    >
      <FaGoogle></FaGoogle>
      <span className="ml-2">Sign in with Google</span>
    </span>
  );
};

export default Google;
