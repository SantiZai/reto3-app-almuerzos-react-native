import CenterView from "../../../components/CenterView";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";

import { UserStore } from "../../../utils/stateStore";

import { router } from "expo-router";

const ConfirmPage = () => {
  const name = UserStore.useState((s) => s.fullname);

  return (
    <CenterView>
      <CustomText title>¡Orden creada exitosamente!</CustomText>
      <CustomText>
        Gracias{" "}
        {/* manipulate the name to capitalize the words */}
        {name
          .split(" ")
          .map((word) => word.slice(0, 1).toUpperCase().concat(word.slice(1)))
          .join(" ")}
      </CustomText>
      <CustomText>
        Su pedido ya está en nuestro registro y pronto se le avisará para poder
        retirarlo.
      </CustomText>
      <CustomButton title="Volver al principio" onPress={() => router.replace("/")} />
    </CenterView>
  );
};

export default ConfirmPage;
