/* states */
import { useState } from "react";
import { UserStore } from "../../utils/stateStore";

/* components */
import { TextInput } from "react-native";
import CenterView from "../../components/CenterView";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";

/* utils */
import { login } from "../../utils/auth";
import { Employee } from "../../utils/models";
import { router } from "expo-router";

/* styles */
import { mainStyles } from "../../mainStyles.module";

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

  const handleLogin = (employee: Partial<Employee>) => {
    login(employee)
      .then((res) =>
        UserStore.update((s) => {
          (s.fullname = res.fullname),
            (s.identifier = res.identifier),
            (s.position = res.position);
        })
      )
      .finally(() => router.replace("/orders"));
  };

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
      <CustomButton
        title="Acceder"
        onPress={() => handleLogin(formValues)}
        large
      />
    </CenterView>
  );
};

export default LoginPage;
