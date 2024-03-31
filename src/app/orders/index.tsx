import { useEffect, useState } from "react";
import { UserStore } from "../../utils/stateStore";

import CenterView from "../../components/CenterView";
import CustomText from "../../components/CustomText";
import { Menu } from "../../utils/models";
import { View } from "react-native";
import Card from "../../components/Card";

import { getMenus } from "../../utils/menus";

//TODO
const MenusPage = () => {
  const [menus, setMenus] = useState<Menu[]>();

  const position = UserStore.useState((s) => s.position);

  useEffect(() => {
    getMenus(position).then((res) => setMenus(res));
  }, [position]);

  return (
    <CenterView>
      <CustomText>Creación de menú</CustomText>
      <View>
        {menus &&
          menus.map((menu: Menu, index: number) => (
            <Card
              key={index}
              name={menu.name}
              type={menu.type}
            />
          ))}
      </View>
    </CenterView>
  );
};

export default MenusPage;
