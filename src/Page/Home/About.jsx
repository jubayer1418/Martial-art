import { Link } from "react-router-dom";
import img from "../../assets/abu.jpg";
const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row gap-10">
          {/* <SectionTitle title={"About"}></SectionTitle> */}
          <img src={img} className="md:max-w-3xl rounded-lg shadow-2xl" />
          <div className="overflow-hidden">
            <h1 className="text-5xl font-bold">
              ABOUT <span className="text-[#E43D4E]">FIGHT</span> SCHOOL
            </h1>
            <p className="py-6">
              Fight School has specialized in martial arts since 1986 and has
              one of the most innovative programs in the nation.
            </p>
            <p className="py-6">
              We teach martial arts because we love it — not because we want to
              make money on you. Unlike other martial arts schools, we do not
              require you to sign long term contracts. You just pay one low
              monthly fee for your martial arts and self defense classes at the
              beginning of each month. Many martial arts...
            </p>
            <Link
              to={"/classes"}
              className="btn bg-[#E0B573]  text-[#110C04] hover:text-white disabled hover:bg-[#ff9900]"
            >
              Get start
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
