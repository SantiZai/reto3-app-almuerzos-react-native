import { View } from "react-native";
import CustomText from "./CustomText";
import { mainStyles } from "../mainStyles.module";


const Card = ({ name, type }: { name: string; type: string }) => {
  return (
    <View style={mainStyles.card}>
      <CustomText styles={mainStyles.cardTitle}>{name}</CustomText>
      <CustomText styles={mainStyles.paragraph}>{type}</CustomText>
    </View>
  );
};

export default Card;
