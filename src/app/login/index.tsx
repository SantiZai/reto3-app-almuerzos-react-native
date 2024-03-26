import { useState } from "react";
import { TextInput } from "react-native";
import CenterView from "../../components/CenterView";
import CustomText from "../../components/CustomText";
import { mainStyles } from "../../mainStyles.module";
import CustomButton from "../../components/CustomButton";
import { Employee } from "../../utils/models";
import { login } from "../../utils/auth";

const LoginPage = () => {
  const [formValues, setFormValues] = useState<Partial<Employee>>({
    fullname: "",
    identifier: "",
  });

  const handleChange = (key: string, text: string) =>
    setFormValues((prevState) => ({
      ...prevState,
      [key]: text,
    }));

  return (
    <CenterView>
      <CustomText>Ingresar</CustomText>
      <TextInput
        value={formValues.fullname}
        style={mainStyles.inputText}
        placeholder="Nombre completo"
        onChangeText={(text: string) => handleChange("fullname", text)}
      />
      <TextInput
        value={formValues.identifier}
        style={mainStyles.inputText}
        placeholder="Identificador"
        onChangeText={(text: string) => handleChange("identifier", text)}
      />
      <CustomButton title="Acceder" onPress={() => login(formValues)} large />
    </CenterView>
  );
};

export default LoginPage;
