import { Text } from "react-native";
import { mainStyles } from "../mainStyles.module";

const CustomText = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: {};
}) => <Text style={{ ...mainStyles.text, ...styles }}>{children}</Text>;

export default CustomText;
