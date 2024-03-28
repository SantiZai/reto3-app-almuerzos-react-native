import envVars from "../../env";
import { Employee } from "./models";

export const login = async (employee: Partial<Employee>) => {
  const credentials = {
    fullname: employee.fullname.toLowerCase().trim(),
    identifier: employee.identifier.toString().trim(),
  };
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };
  try {
    const result = await fetch(`${envVars.API_BASE}/auth/login`, config);
    return result.json();
  } catch (e) {
    console.error(e);
  }
};
