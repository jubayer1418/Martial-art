import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  // console.log(user.email);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isloading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);

      return res?.data;
    },
  });
  // console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
