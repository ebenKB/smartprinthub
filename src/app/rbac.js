const rules = {
  user: {
    static: [
      'job:create',
      'job:edit',
      'job:delete',
      'job:view-all',
      'company:add',
    ],
  },
  company: {
    static: [
      'job:view',
      'job:accept',
      'job:reject',
      'job:update_cost',
      'profile:view',
      'profile:update',
      'company_home:view',
    ],
    dynamic: {
      'account:sweep': ({ accountType, userRole }) => {
        console.log(accountType, userRole);
        return true;
      },
      'account:change_payment_method': ({ accountType, userRole }) => {
        console.log(accountType, userRole);
        return true;
      },
    },
  },
};

export default rules;
