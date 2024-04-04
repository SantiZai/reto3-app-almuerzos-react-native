import CenterView from "../../../components/CenterView";
import CustomText from "../../../components/CustomText";

const ConfirmPage = () => {
  return (
    <CenterView>
      <CustomText title>¡Orden creada exitosamente!</CustomText>
      <CustomText>Su pedido ya está en nuestro registro y pronto se le avisará para poder retirarlo.</CustomText>
    </CenterView>
  );
};

export default ConfirmPage;
