import Home from "../PortfolioContainer/Home/Home";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let screen = 0; screen <= TOTAL_SCREENS.length; screen++) {
    if (TOTAL_SCREENS[screen].screen_name === screen_name) return screen;
  }
  return -1
};
