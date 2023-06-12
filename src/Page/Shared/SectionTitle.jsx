const SectionTitle = ({ title }) => {
  return (
    <div className="text-4xl uppercase text-gray-100  font-bold bg-gradient-to-r from-cyan-500 to-blue-500  text-center opacity-70 py-10  space-y-5">
      <h1>{title}</h1>
      <hr />
    </div>
  );
};

export default SectionTitle;
