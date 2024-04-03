import envVars from "../../env";
import { Order } from "./models";

/* export const createOrder = async (
  token: { data: string; type: string },
  employeeid: string,
  order: Order
) => {
  const newOrder = {
    employeeid,
    menus: Object.values(order),
  };
  console.log(token)
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, order: newOrder }),
  };
  try {
    const result = await fetch(`${envVars.API_BASE}/orders`, config);
    return result.json();
  } catch (e) {
    console.error(e);
  }
}; */
