// export const rolePermissions = {
//     admin: [
//       "view_dashboard",
//       "view_registration_approval",
//       "view_user_management",
//       "view_reports",
//     ],
//     super_admin: [
//       "view_dashboard",
//       "view_registration_approval",
//       "view_user_management",
//       "view_reports",
//     ],
//     management: [
//       "view_dashboard",
//       "view_registration_approval",  // Management-specific permissions
//     ],
//     operator: [
//       "view_dashboard",
//       "view_registration_approval",  // Operator-specific permissions
//     ],
//   };


const rolePermissions = {
    admin: [
        "view_dashboard",
        //   "view_operator_registration",
        "view_all_user_list",
        "view_purchaser_list",
        "view_referrer_list",
        "view_financial_consultant_list",
        "view_gold_stake_schemes",
        "view_referrals_scheme",
        "contentManagement_home",
        "contentManagement_stake_now",
        "contentManagement_referrals",
        "contentManagement_about_us",
        "contentManagement_blogs",
        "contentManagement_contact_us",
        "master_user_list" ,
         "master_user_role",

        //   "view_registration_approval",
        "view_user_management",
        "view_reports",
    ],
    superAdmin: [
        "view_dashboard",
        //   "view_operator_registration",
        "view_all_user_list",
        "view_purchaser_list",
        "view_referrer_list",
        "view_financial_consultant_list",
        "view_gold_stake_schemes",
        "view_referrals_scheme",
        "contentManagement_home",
        "contentManagement_stake_now",
        "contentManagement_referrals",
        "contentManagement_about_us",
        "contentManagement_blogs",
        "contentManagement_contact_us",
        "master_user_list" ,
         "master_user_role",

        //   "view_registration_approval",
        "view_user_management",
        "view_reports",
    ],
    management: [
        "view_dashboard",
        "view_registration_approval",  // Management-specific permissions
         "purchase_approval",
        "goldstakescheme_approval",
        "referralsheme_approval",
    ],
    operator: [
        "view_dashboard",
        "operator_user_registration",  // Operator-specific permissions
       
    ],
};

export default rolePermissions;
