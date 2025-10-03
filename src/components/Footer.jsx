import SocialMediaButtons from './SocialMediaButton';

const Footer = ({ }) => {
  return (
    <div className="py-8 text-center border-t border-slate-200 dark:border-slate-800 mt-12"> {/* Added border-t and mt */}
      <div className="container max-w-screen-lg mx-auto px-4"> {/* Added px-4 for padding on small screens */}
        <div className="mb-4"> {/* Added mb for spacing */}
          <div className="flex flex-wrap justify-center gap-4"> {/* Increased gap */}
            <SocialMediaButtons size="24" />
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
