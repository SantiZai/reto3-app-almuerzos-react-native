import { Store } from "pullstate";

export const UserStore = new Store({
  fullname: "",
  identifier: "",
  position: "",
  isDarkMode: true,
});
