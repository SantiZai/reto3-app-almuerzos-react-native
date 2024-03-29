import { useEffect, useState } from "react";
import CenterView from "../../components/CenterView";
import CustomText from "../../components/CustomText";
import { UserStore } from "../../utils/stateStore";
import { Menu } from "../../utils/models";
import { getMenus } from "../../utils/menus";

//TODO
const MenusPage = () => {
  const [menus, setMenus] = useState<Menu[]>()

  const position = UserStore.useState(s => s.position)
  
  useEffect(() => {
    getMenus(position).then((res) => console.log(res))
  }, [position])
  
  return (
    <CenterView>
      <CustomText>Creación de menú</CustomText>
    </CenterView>
  );
};

export default MenusPage;
