import { Text } from "react-native";

import { mainStyles } from "../mainStyles.module";
import { UserStore } from "../utils/stateStore";

const CustomText = ({
  children,
  title,
  styles,
}: {
  children: React.ReactNode;
  title?: boolean;
  styles?: {};
}) => {
  const isDarkMode = UserStore.useState((s) => s.isDarkMode);

  const textTheme = isDarkMode ? mainStyles.textDark : mainStyles.textLight;

  const isTitle = title ? [textTheme, mainStyles.title] : textTheme;

  return <Text style={[mainStyles.text, isTitle, styles]}>{children}</Text>;
};

export default CustomText;
