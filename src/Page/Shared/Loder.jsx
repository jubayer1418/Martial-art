import { FidgetSpinner } from "react-loader-spinner";

const Loder = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FidgetSpinner
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    </div>
  );
};

export default Loder;
