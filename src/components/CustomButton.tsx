import { Pressable } from "react-native";
import { Link } from "expo-router";
import CustomText from "./CustomText";

import { mainStyles } from "../mainStyles.module";

const CustomButton = ({
  title,
  onPress,
  link,
  large,
}: {
  title: string;
  onPress?: () => void;
  link?: string;
  large?: boolean;
}) => (
  <Pressable
    style={
      large
        ? {
            ...mainStyles.button,
            ...mainStyles.largeButton,
            ...{ display: "flex", justifyContent: "center" },
          }
        : mainStyles.button
    }
    onPress={onPress}
  >
    {link ? (
      <Link
        style={{ textAlign: "center" }}
        href={link}
      >
        <CustomText styles={mainStyles.buttonText}>{title}</CustomText>
      </Link>
    ) : (
      <CustomText styles={mainStyles.buttonText}>{title}</CustomText>
    )}
  </Pressable>
);

export default CustomButton;
