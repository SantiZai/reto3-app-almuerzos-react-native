import envVars from "../../env";

export const getMenus = async (position: string) => {
  try {
    const results = await fetch(`${envVars.API_BASE}/menus/${position}`);
    return results.json();
  } catch (e) {
    console.error(e);
  }
};
