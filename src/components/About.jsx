import { PersonalPicture } from "../assets";
import { infos } from "../data";
import Title from "./Title";

const About = () => {
  return (
    <section
      id="About"
      className=" flex items-start justify-center flex-col pt-20 pb-6 px-6 md:px-12 overflow-hidden"
    >
      <div className="flex flex-col">
        <Title>About</Title>
      </div>
      <div className=" w-full flex flex-wrap md:flex-row md:gap-8 md:mx-0 my-[1.5rem]  ">
        <div className=" md:w-[35%] flex items-start justify-center">
          {" "}
          {/* Added flex centering for image if it's smaller than container */}
          <img
            className="h-auto max-w-full rounded-lg shadow-lg"
            src={PersonalPicture}
            alt="Houasnia Aymen Ahmed"
            loading="lazy"
          />{" "}
          {/* Updated alt, added styling & lazy loading */}
        </div>
        <div className="flex-1 flex flex-col justify-between  ">
          <div className="flex flex-col items-start ">
            <h3 className="text-h3 font-poppins font-semibold text-accent-primary dark:text-accent-primary-light">
              {" "}
              {/* Use Raleway and accent color */}
              Odoo Developer / Engineer
            </h3>
            <p className="italic mt-0 mb-[1rem] text-light-text-secondary dark:text-dark-text-secondary">
              Industrial Network Engineering & Artificial Intelligence Engineer
            </p>
            <div className="flex flex-col sm:flex-row w-full justify-between">
              <div className="flex flex-col w-full sm:w-1/2">
                {infos.slice(0, 4).map((item) => (
                  <div key={item.title} className="flex flex-col p-2">
                    <ul>
                      <li>
                        <i>
                          <strong>{item.title}:</strong>
                        </i>
                        &nbsp;&nbsp;
                        <span>{item.content}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                {infos.slice(4).map((item) => (
                  <div key={item.title} className="flex flex-col p-2">
                    <ul>
                      <li>
                        <i>
                          <strong>{item.title}: </strong>
                        </i>
                        &nbsp;&nbsp;
                        <span>{item.content}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-base max-w-6xl mb-3 font-bold">
              Graduated from{" "}
              <span>
                &quot;Higher National School of Renewable Energies,
                Environment & Sustainable Development (HNS-RE2SD)&quot;
              </span>{" "}
              with Engineering Diploma in{" "}
              <span>
                {" "}
                &quot;Industrial Network Engineering & Artificial
                Intelligence&quot;
              </span>{" "}
              with Excellent mention (19/20).
            </p>
            <p>
              Currently working as <span>Odoo Developer & Consultant</span> at
              ITComp in Algiers, Algeria. Previously worked as{" "}
              <span>System Administrator & IT Engineer</span> at L'OURS FOR
              OIL & GAS SERVICES and as <span>IONIC Framework Developer</span>{" "}
              at Originova.
            </p>
            <p>
              Skilled in <span>Programming</span>, <span>Team-working</span>,
              and always open to learn new things. The phrase that describes
              me is:{" "}
              <span>
                &quot;If you do a job do it perfectly.. and once you start it
                you better finish it&quot;
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
