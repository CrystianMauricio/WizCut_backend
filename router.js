import WizcutRoutes from "./routes/WizcutRoutes.js";

export default (app) => {
  app.use("/wizcut", WizcutRoutes);
};
