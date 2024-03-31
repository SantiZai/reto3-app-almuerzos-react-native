import { Pressable, View } from "react-native";
import CustomText from "./CustomText";
import { mainStyles } from "../mainStyles.module";

const Card = ({
  name,
  type,
  onPress,
}: {
  name: string;
  type: string;
  onPress?: () => void;
}) => {
  return (
    <View style={mainStyles.card}>
      {onPress ? (
        <Pressable onPress={onPress}>
          <CustomText styles={mainStyles.cardTitle}>{name}</CustomText>
          <CustomText styles={mainStyles.paragraph}>{type}</CustomText>
        </Pressable>
      ) : (
        <>
          <CustomText styles={mainStyles.cardTitle}>{name}</CustomText>
          <CustomText styles={mainStyles.paragraph}>{type}</CustomText>
        </>
      )}
    </View>
  );
};

export default Card;
