import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCategory = () => {
  const { user, loading } = useAuth();
  // console.log(user.email);
  const [axiosSecure] = useAxiosSecure();
  const { data: isCategory, isloading: isCategoryLoading } = useQuery({
    queryKey: ["users/admin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);

      return res?.data;
    },
  });
  // console.log(isCategory);
  return [isCategory, isCategoryLoading];
};

export default useCategory;
