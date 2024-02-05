import { getRegester, regester, regester1 } from "../controllers/regester";

module.exports = (app) => {
  app.post("/api/regester", regester);
  app.get("/api/get_regester", getRegester);
  app.get("/api/regester1", regester1);
};
