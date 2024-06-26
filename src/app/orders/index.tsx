import { useEffect, useState } from "react";
import { UserStore } from "../../utils/stateStore";
import { router } from "expo-router";

import CenterView from "../../components/CenterView";
import CustomText from "../../components/CustomText";
import { Menu, Order } from "../../utils/models";
import { ScrollView, View } from "react-native";
import Card from "../../components/Card";

import { getMenus } from "../../utils/menus";
import CustomButton from "../../components/CustomButton";
import { mainStyles } from "../../mainStyles.module";
import { createOrder } from "..";
import TypeCard from "../../components/TypeCard";

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
  const [times, setTimes] = useState<string[]>([]);

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
    setTimes([]);
  }, [position]);

  return (
    <ScrollView>
      <CenterView>
        <CustomText styles={{...mainStyles.title, marginBottom: 100}}>Creación de menú</CustomText>
        <View>
          {menus && menus.length > 0 ? (
            <>
              <View style={{marginBottom: 50}}>
                <CustomText title>Entrada</CustomText>
                {menus
                  .filter((men) => men.type === "entrada")
                  .map((menu: Menu, index: number) => (
                    <Card
                      key={index}
                      name={menu.name}
                      onPress={() => {
                        /* setea el correspondiente valor dentro de los menús para la orden */
                        setOrder((prevState) => ({
                          ...prevState,
                          menus: {
                            ...prevState.menus,
                            ["entradaId"]: menu.id,
                          },
                        }));

                        /* agrega a la lista de nombre de los tiempos el menú seleccionado */
                        setTimes([...times, menu.name]);

                        /* filtra los menús para no mostrar los que coinciden con el tipo ya seleccionado */
                        setMenus(
                          menus.filter((menu) => menu.type !== "entrada")
                        );
                      }}
                    />
                  ))}
              </View>
              <View style={{marginBottom: 50}}>
                <CustomText title>Plato principal</CustomText>
                {menus
                  .filter((men) => men.type === "principal")
                  .map((menu: Menu, index: number) => (
                    <Card
                      key={index}
                      name={menu.name}
                      onPress={() => {
                        setOrder((prevState) => ({
                          ...prevState,
                          menus: {
                            ...prevState.menus,
                            ["principalId"]: menu.id,
                          },
                        }));
                        setTimes([...times, menu.name]);
                        setMenus(
                          menus.filter((menu) => menu.type !== "principal")
                        );
                      }}
                    />
                  ))}
              </View>
              <View style={{marginBottom: 50}}>
                <CustomText title>Postre</CustomText>
                {menus
                  .filter((men) => men.type === "postre")
                  .map((menu: Menu, index: number) => (
                    <Card
                      key={index}
                      name={menu.name}
                      onPress={() => {
                        setOrder((prevState) => ({
                          ...prevState,
                          menus: {
                            ...prevState.menus,
                            ["postreId"]: menu.id,
                          },
                        }));
                        setTimes([...times, menu.name]);
                        setMenus(
                          menus.filter((menu) => menu.type !== "postre")
                        );
                      }}
                    />
                  ))}
              </View>
            </>
          ) : (
            <CustomText title styles={{marginTop: 100}}>Confirma tu órden!</CustomText>
          )}
        </View>
        <View style={{marginBottom: 100}}>
          {times.map((time: string, index: number) => (
            <TypeCard
              key={index}
              name={time}
            />
          ))}
        </View>
        <CustomButton
          title="crear orden"
          onPress={() => {
            handleCreateOrder(expoPushToken, order);
            router.push("/orders/confirm");
          }}
          large
        />
      </CenterView>
    </ScrollView>
  );
};

export default MenusPage;
