import { useEffect, useState } from "react";
import { UserStore } from "../../utils/stateStore";

import CenterView from "../../components/CenterView";
import CustomText from "../../components/CustomText";
import { Menu } from "../../utils/models";
import { View } from "react-native";
import Card from "../../components/Card";

import { getMenus } from "../../utils/menus";
import CustomButton from "../../components/CustomButton";

interface Order {
  entradaId: string;
  principalId: string;
  postreId: string;
}

const MenusPage = () => {
  const [menus, setMenus] = useState<Menu[]>();
  const [order, setOrder] = useState<Order>({
    entradaId: "",
    principalId: "",
    postreId: "",
  });

  const position = UserStore.useState((s) => s.position);

  useEffect(() => {
    getMenus(position).then((res) => setMenus(res));
  }, [position]);

  return (
    <CenterView>
      <CustomText>Creación de menú</CustomText>
      <View>
        {menus && (
          <>
            <View>
              <CustomText>Entrada</CustomText>
              {menus
                .filter((men) => men.type === "entrada")
                .map((menu: Menu, index: number) => (
                  <Card
                    key={index}
                    name={menu.name}
                    onPress={() =>
                      setOrder((prevState) => ({
                        ...prevState,
                        entradaId: menu.id,
                      }))
                    }
                  />
                ))}
            </View>
            <View>
              <CustomText>Plato principal</CustomText>
              {menus
                .filter((men) => men.type === "principal")
                .map((menu: Menu, index: number) => (
                  <Card
                    key={index}
                    name={menu.name}
                    onPress={() =>
                      setOrder((prevState) => ({
                        ...prevState,
                        principalId: menu.id,
                      }))
                    }
                  />
                ))}
            </View>
            <View>
              <CustomText>Postre</CustomText>
              {menus
                .filter((men) => men.type === "postre")
                .map((menu: Menu, index: number) => (
                  <Card
                    key={index}
                    name={menu.name}
                    onPress={() =>
                      setOrder((prevState) => ({
                        ...prevState,
                        postreId: menu.id,
                      }))
                    }
                  />
                ))}
            </View>
          </>
        )}
      </View>
      <CustomButton
        title="crear orden"
        large
        onPress={() => console.log(order)}
      />
    </CenterView>
  );
};

export default MenusPage;
