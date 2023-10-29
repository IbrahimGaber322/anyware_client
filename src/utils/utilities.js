// Function to determine if the screen is a mobile screen based on inner width
export const isMobileScreen = () => {
  return window.innerWidth <= 767; // Returns true if the inner width is less than or equal to 767 (considered a mobile screen)
};
