import { useEffect, useState } from "react";
import ClassesCard from "../Shared/ClassesCard";
import SectionTitle from "../Shared/SectionTitle";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  console.log(classes);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_LINK}/addclass`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="my-10">
      <SectionTitle title={"Popular Classes"}></SectionTitle>
      <div className="grid grid-cols-3 w-[70%] mx-auto ">
        {classes.map((singleclass) => (
          <ClassesCard
            key={singleclass._id}
            singleclass={singleclass}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
