import { View } from "react-native";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";

import { mainStyles } from "../mainStyles.module";

const Card = ({
  name,
  onPress,
}: {
  name: string;
  onPress?: () => void;
}) => {
  return (
    <View style={mainStyles.card}>
      <CustomText styles={mainStyles.cardTitle}>{name}</CustomText>
      <CustomButton title="elegir" onPress={onPress} />
    </View>
  );
};

export default Card;
