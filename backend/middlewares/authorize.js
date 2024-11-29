import Permission from "../models/permission.model.js"
import UserRole from "../models/userrole.model.js"
import RolePermission from "../models/rolepermission.model.js"

async function checkPermissions(userId, permissionToCheck) {
  const permission = await Permission.findOne(permissionToCheck);

  const userRoles = await UserRole.find({
    userId,
  });

  const rolePermissions = await RolePermission.find({
    roleId: { $in: userRoles.map(({ roleId }) => roleId) },
  });

  return rolePermissions.some(({ permissionId }) =>
    permissionId.equals(permission._id)
  );
}

export const canResign = async (req, res, next) => {
  let userHasPermission = await checkPermissions(req.user._id, {
    subject: "resignation",
    action: "submit",
  });

  if (userHasPermission) next();
  else res.status(401).json({ error: "Insufficient Permission" });
};

export const canConcludeResignation = async (req, res, next) => {
  let userHasPermission = await checkPermissions(req.user._id, {
    subject: "resignation",
    action: "conclude",
  });
  if (userHasPermission) next();
  else res.status(401).json({ error: "Insufficient Permission" });
};

export const canGetAllResignations = async (req, res, next) => {
  let userHasPermission = await checkPermissions(req.user._id, {
    subject: "resignation",
    action: "see_all",
  });
  if (userHasPermission) next();
  else res.status(401).json({ error: "Insufficient Permission" });
};

export const canGetAllResponses = async (req, res, next) => {
  let userHasPermission = await checkPermissions(req.user._id, {
    subject: "responses",
    action: "see_all",
  });
  if (userHasPermission) next();
  else res.status(401).json({ error: "Insufficient Permission" });
};
