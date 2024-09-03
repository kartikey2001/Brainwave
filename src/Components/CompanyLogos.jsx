import { companyLogos } from "../Constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-n-1/50 text-center ">
        Helping people vreate beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
            <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
                <img src={logo} alt="Company" width={100} height={100} />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
