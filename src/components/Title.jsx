import PropTypes from "prop-types";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-4xl font-bold underline underline-offset-8 decoration-4 mb-5 text-light-text-primary dark:text-dark-text-primary"
    >
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export default Title;
