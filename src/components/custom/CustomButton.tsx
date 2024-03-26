import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import CustomText from "./CustomText";

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
            ...styles.button,
            ...styles.largeButton,
            ...{ display: "flex", justifyContent: "center" },
          }
        : styles.button
    }
    onPress={onPress}
  >
    {link ? (
      <Link
        style={{ textAlign: "center" }}
        href={link}
      >
        <CustomText styles={styles.text}>{title}</CustomText>
      </Link>
    ) : (
      <CustomText styles={styles.text}>{title}</CustomText>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "blue",
    borderRadius: 10,
    marginVertical: 10,
  },
  largeButton: {
    width: "100%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomButton;
