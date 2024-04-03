import { useEffect, useState } from "react";
import { UserStore } from "../../utils/stateStore";

import CenterView from "../../components/CenterView";
import CustomText from "../../components/CustomText";
import { Menu, Order } from "../../utils/models";
import { ScrollView, View } from "react-native";
import Card from "../../components/Card";

import { getMenus } from "../../utils/menus";
import CustomButton from "../../components/CustomButton";
import { mainStyles } from "../../mainStyles.module";
import { createOrder } from "..";

const MenusPage = () => {
  const [menus, setMenus] = useState<Menu[]>();
  const [order, setOrder] = useState<Order>({
    employeeid: "",
    menus: {
      entradaId: "",
      principalId: "",
      postreId: "",
    },
  });

  const { id, position, expoPushToken } = UserStore.useState((s) => s);

  const handleCreateOrder = (
    token: { data: string; type: string },
    order: Order
  ) => {
    createOrder(token, order).then((res) => console.log(res));
  };

  useEffect(() => {
    getMenus(position).then((res) => setMenus(res));
    setOrder((prevState) => ({
      ...prevState,
      employeeid: id,
    }));
  }, [position]);

  return (
    <ScrollView>
      <CenterView>
        <CustomText styles={mainStyles.title}>Creación de menú</CustomText>
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
                          menus: {
                            ...prevState.menus,
                            ["entradaId"]: menu.id,
                          },
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
                          menus: {
                            ...prevState.menus,
                            ["principalId"]: menu.id,
                          },
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
                          menus: {
                            ...prevState.menus,
                            ["postreId"]: menu.id,
                          },
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
          onPress={() => handleCreateOrder(expoPushToken, order)}
          large
        />
      </CenterView>
    </ScrollView>
  );
};

export default MenusPage;
