import { Text } from "react-native";

import { mainStyles } from "../mainStyles.module";
import { UserStore } from "../utils/stateStore";

const CustomText = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: {};
}) => {
  const isDarkMode = UserStore.useState((s) => s.isDarkMode);

  const textTheme = isDarkMode ? mainStyles.textDark : mainStyles.textLight;
  return <Text style={[mainStyles.text, textTheme, styles]}>{children}</Text>;
};

export default CustomText;
