import { View } from "react-native";
import { mainStyles } from "../../mainStyles.module";

const CenterView = ({ children }: { children: React.ReactNode }) => (
  <View style={mainStyles.center}>
    {<View style={mainStyles.containerAll}>{children}</View>}
  </View>
);

export default CenterView;
