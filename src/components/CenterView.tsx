import { View } from "react-native";

import { UserStore } from "../utils/stateStore";

import { mainStyles } from "../mainStyles.module";

const CenterView = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = UserStore.useState((s) => s.isDarkMode);

  const containerTheme = isDarkMode ? mainStyles.darkContainer : mainStyles.lightContainer

  return (
    <View style={[mainStyles.center, containerTheme]}>
      {<View style={mainStyles.containerAll}>{children}</View>}
    </View>
  );
};

export default CenterView;
