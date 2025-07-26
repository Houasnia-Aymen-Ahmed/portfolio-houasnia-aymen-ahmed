import { socialMedia } from '../data';

const Footer = ({theme}) => {
  return (
    <div className="py-8 text-center border-t border-slate-200 dark:border-slate-800 mt-12"> {/* Added border-t and mt */}
      <div className="container max-w-screen-lg mx-auto px-4"> {/* Added px-4 for padding on small screens */}
				<div className="mb-4"> {/* Added mb for spacing */}
					<div className="flex flex-wrap justify-center gap-4"> {/* Increased gap */}
            {socialMedia.map((social)=> (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-accent-primary
                         inline-flex items-center rounded-full
                         transition-all ease-in duration-300 group"
              aria-label={social.id} // Accessibility: add aria-label
            >
              <img
                className="w-[24px] h-[24px] group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                // Corrected logic: dark theme needs light icon (icon2), light theme needs dark icon (icon)
                src={theme === 'dark' ? social.icon2 : social.icon}
                alt={social.id} />
            </a>
            ))}
					</div>
				</div>
			</div>
			<p className="text-sm text-light-text-secondary dark:text-dark-text-secondary opacity-75">
				&copy; {new Date().getFullYear()} Houasnia Aymen Ahmed. All rights reserved.
			</p>
		</div>
  )
}

export default Footer
