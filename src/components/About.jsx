import { myPic } from '../assets';
import { infos } from '../data';
import Title from './Title'

const About = () => {
  return (
    <section id="About" className=" flex items-start justify-center flex-col pt-20 pb-6 px-6 md:px-12 overflow-hidden">
      <div className="flex flex-col" >
        <Title>About</Title>
      </div>
      <div className=" w-full flex flex-wrap md:flex-row md:gap-8 md:mx-0 my-[1.5rem]  " >
        <div className=" md:w-[35%] flex items-center justify-center"> {/* Added flex centering for image if it's smaller than container */}
          <img className="h-auto max-w-full rounded-lg shadow-lg" src={myPic} alt="Houasnia Aymen Ahmed" loading="lazy" /> {/* Updated alt, added styling & lazy loading */}
        </div>
        <div className="flex-1 flex flex-col justify-between  ">
          <div className="flex flex-col items-start ">
            <h3 className="font-bold text-[26px] font-raleway text-accent-primary dark:text-accent-primary"> {/* Use Raleway and accent color */}
              Developer / Engineer
            </h3>
            <p className="italic mt-0 mb-[1rem] text-light-text-secondary dark:text-dark-text-secondary">Programming is life</p>
            <div className="flex flex-col sm:flex-row w-full justify-between">
              <div className="flex flex-col">
                 {infos.slice(0, Math.ceil(infos.length / 2)).map((item) => (
                  <div key={item.id} className='flex flex-col p-2'>
                  <ul>
                    <li>
                      <i><strong>{item.title}:</strong></i>&nbsp;&nbsp;
                      <span>{item.content}</span>
                    </li>
                  </ul>
                </div>
                ))}
              </div>
              <div className="flex flex-col">
                {infos.slice(Math.ceil(infos.length / 2)).map((item) => (
                  <div key={item.id} className='flex flex-col p-2'>
                  <ul>
                    <li>
                      <i><strong>{item.title}: </strong></i>&nbsp;&nbsp;
                      <span>{item.content}</span>
                    </li>
                  </ul>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className='flex flex-col'>
              <p className='text-base max-w-6xl mb-3 font-bold' >
                Student at the <span>&quot;Higher National School of Renewable Energies, Environment & Sustainable Development (HNS-RE2SD)&quot;</span>
                & Last year(3/3) in Specialty <span> &quot;Industrial Network Engineering & Artificial Intelligence&quot;</span>.</p>
              <p>Lives at the moment in <span>Batna / Algeria
                </span>. I can say that i am quite skilled in multiple fields including <span>Unity ARCore</span> Mobile Applications Development, <span>Django</span> Back-end Development
              </p>
              <p>
                <span>Programming</span> is my power point, though <span>Graphic Design</span> is my weak one
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About