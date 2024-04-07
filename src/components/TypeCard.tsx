import { View } from "react-native";
import CustomText from "./CustomText";

import { mainStyles } from "../mainStyles.module";

const TypeCard = ({name}: {name: string}) => {
  return (
    <View style={mainStyles.card}>
      <CustomText styles={mainStyles.cardTitle}>{name}</CustomText>
    </View>
  );
};

export default TypeCard;
