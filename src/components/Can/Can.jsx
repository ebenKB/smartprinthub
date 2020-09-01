
import Rules from '../../app/rbac';

const check = (rules, role, action, data) => {
  const permissions = rules[role];
  if (!permissions) {
    return false;
  }

  const staticPermission = permissions.static;

  if (staticPermission && staticPermission.includes(action)) {
    return true;
  }

  // check for dynamic permissions
  const dynamicPermissions = permissions.dynamic;
  if (dynamicPermissions) {
    const permissionConditions = dynamicPermissions[action];
    if (!permissionConditions) {
      return false;
    }

    return permissionConditions(data);
  }
  return false;
};

const Can = ({
  userRole, perform, data, yes, no,
}) => (check(Rules, userRole, perform, data, yes, no) ? yes() : no());

export default Can;
