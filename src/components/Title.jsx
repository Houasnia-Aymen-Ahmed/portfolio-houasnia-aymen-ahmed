import PropTypes from "prop-types";
import { buildTypographyClass } from "../utils/typography";

function Title({ children, id, variant = "section" }) {
  return (
    <h1
      id={id || undefined}
      className={`${buildTypographyClass(
        "title",
        variant,
        "primary"
      )} underline underline-offset-8 decoration-4 mb-5`}
    >
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  variant: PropTypes.oneOf([
    "hero",
    "section",
    "card",
    "nav",
    "form",
    "default",
  ]),
};

export default Title;
