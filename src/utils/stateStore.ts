import { Store } from "pullstate";

export const UserStore = new Store({
  id: "",
  fullname: "",
  identifier: "",
  position: "",
  isDarkMode: true,
});
