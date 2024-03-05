import lightOnOff from "./dom/light-on-off.js";
import sidebarActiveLink from "./dom/sidebar-active-link.js";
import sidebarToggle from "./dom/sidebar-toggle.js";
import searchButtonIcon from "./dom/search-button-icon.js";
import windowResize from "./dom/window-resize.js";

import getBiblesData from "./dom/working-with-seed.js";

const doc = document;

doc.addEventListener("DOMContentLoaded", (e) => {
  lightOnOff();
  sidebarActiveLink();
  sidebarToggle();
  searchButtonIcon();
  windowResize();

  /** testing curso javascript john mircha */
  getBiblesData();
  /** fin testing */
});
