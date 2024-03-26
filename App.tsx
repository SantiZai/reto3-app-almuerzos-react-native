import { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const sendNotification = async (order) => {
  try {
    const notificationContent = {
      title: "Nueva orden creada",
      body: `Tu orden #${order.id} ha sido creada exitosamente`,
      data: order,
    };

    await Notifications.scheduleNotificationAsync({
      content: {
        title: notificationContent.title,
        body: notificationContent.body,
        data: notificationContent.data,
      },
      trigger: null,
    });

    console.log("Notificación enviada");
  } catch (e) {
    console.error(e);
  }
};

async function createOrder(expoPushToken: any) {
  const newOrder = {
    employeeid: "9dc613e0-dfa2-4c83-a257-03f6ee8fdc4c",
    menus: [
      "a74bd5b0-367e-4347-b1c6-8a75e0165c5f",
      "715023a3-680b-4e03-8cd1-a3034dd2343a",
    ],
  };

  try {
    const response = await fetch(
      "https://o4lzmc38rd.execute-api.sa-east-1.amazonaws.com/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: expoPushToken, order: newOrder }),
      }
    );

    const jsonResponse = await response.json();

    if (response.ok) {
      console.log("Orden creada exitosamente");

      await sendNotification({expoPushToken, order: jsonResponse.order});
    } else {
      console.error("Error al crear la orden");
    }
  } catch (e) {
    console.error(e);
  }
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token.data;
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState<any>();
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {/* <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>
      <Button
        title="Press to confirm the order"
        onPress={async () => {
          await createOrder(expoPushToken);
        }}
      /> */}
    </View>
  );
}
