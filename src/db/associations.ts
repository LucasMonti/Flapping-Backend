import User from "../models/User";
import Challenge from "../models/Challenge";
import Status from "../models/Status";

//Uno a muchos
Status.hasMany(Challenge, { as: "status", foreignKey: "status_id" });

User.hasMany(Challenge, { as: "referente", foreignKey: "referente_id" });

Challenge.belongsTo(Status, { as: "status", foreignKey: "status_id" });

Challenge.belongsTo(User, { as: "referente", foreignKey: "referente_id" });
