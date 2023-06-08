import { useEffect, useState } from "react";
import MyClassesTable from "./MyClassesTable";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  console.log(classes);
  useEffect(() => {
    fetch("http://localhost:5000/addclass", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>my classes {classes?.length}</h1>
      {classes.map((singleclass) => (
        <MyClassesTable
          key={singleclass._id}
          singleclass={singleclass}
        ></MyClassesTable>
      ))}
    </div>
  );
};

export default MyClasses;
