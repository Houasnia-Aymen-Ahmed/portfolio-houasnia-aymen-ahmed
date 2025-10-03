export const calculateAge = (birthDateString) => {
  if (!birthDateString) {
    return "Unknown";
  }

  // JavaScript can parse "11 April 2001" directly!
  const birthDate = new Date(birthDateString);
  const today = new Date();

  // Check if the date is valid
  if (isNaN(birthDate.getTime())) {
    return "Invalid Date";
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age.toString();
};
