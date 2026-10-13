// Alumni Registration Email Templates

/**
 * Admin / Alumnae Association Notification Template
 */
exports.adminTemplate = (data) => {
  const {
    name,
    batchYear,
    dob,
    department,
    mobile,
    email,
    currentAddress,
    designation,
    field,
    otherField,
    contributions = []
  } = data;

  const contributionBadges = contributions.length > 0
    ? contributions
        .map(
          (c) =>
            `<span style="display:inline-block;background-color:#EFEAF5;color:#4A3F6D;padding:6px 14px;margin:4px;border-radius:20px;font-size:13px;font-family:Arial,sans-serif;font-weight:600;">✓ ${c}</span>`
        )
        .join(" ")
    : '<span style="color:#666;font-style:italic;">None specified</span>';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Alumni Registration</title>
</head>
<body style="font-family:'Segoe UI',Arial,sans-serif;background-color:#F5F5FA;margin:0;padding:24px;color:#212529;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background-color:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">
    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg, #4A3F6D 0%, #2A2346 100%);padding:32px 28px;text-align:center;color:#FFFFFF;">
        <h1 style="margin:0 0 6px 0;font-size:22px;letter-spacing:1px;font-weight:700;">ETHIRAJ COLLEGE FOR WOMEN</h1>
        <p style="margin:0;font-size:13px;opacity:0.85;letter-spacing:0.5px;">(AUTONOMOUS) • CHENNAI - 600008</p>
        <div style="margin-top:16px;display:inline-block;background-color:rgba(255,255,255,0.15);padding:6px 18px;border-radius:20px;font-size:14px;font-weight:600;">
          🎓 New Alumna Registration
        </div>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:32px 28px;">
        <p style="margin:0 0 20px 0;font-size:15px;line-height:1.6;color:#495057;">
          A new alumna has registered on the official college website portal. The registration details are provided below:
        </p>

        <!-- Personal Details Table -->
        <h3 style="margin:24px 0 12px 0;font-size:16px;color:#2A2346;border-bottom:2px solid #EFEAF5;padding-bottom:8px;">
          👤 Personal & Academic Profile
        </h3>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #EAEAEA;border-radius:8px;overflow:hidden;">
          <tr style="background-color:#FBFBFC;">
            <td style="padding:10px 16px;font-weight:600;font-size:14px;width:35%;border-bottom:1px solid #EAEAEA;">Full Name:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;border-bottom:1px solid #EAEAEA;"><strong>${name || '-'}</strong></td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #EAEAEA;">Batch / Year:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;border-bottom:1px solid #EAEAEA;">${batchYear || '-'}</td>
          </tr>
          <tr style="background-color:#FBFBFC;">
            <td style="padding:10px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #EAEAEA;">Date of Birth:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;border-bottom:1px solid #EAEAEA;">${dob || '-'}</td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #EAEAEA;">Department:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;border-bottom:1px solid #EAEAEA;">${department || '-'}</td>
          </tr>
          <tr style="background-color:#FBFBFC;">
            <td style="padding:10px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #EAEAEA;">Mobile Number:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;border-bottom:1px solid #EAEAEA;"><a href="tel:${mobile}" style="color:#003BD1;text-decoration:none;">${mobile || '-'}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #EAEAEA;">Email ID:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;border-bottom:1px solid #EAEAEA;"><a href="mailto:${email}" style="color:#003BD1;text-decoration:none;">${email || '-'}</a></td>
          </tr>
          <tr style="background-color:#FBFBFC;">
            <td style="padding:10px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #EAEAEA;">Designation:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;border-bottom:1px solid #EAEAEA;">${designation || '-'}</td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #EAEAEA;">Field / Sector:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;border-bottom:1px solid #EAEAEA;">${field || '-'}${otherField ? ` (${otherField})` : ''}</td>
          </tr>
          <tr style="background-color:#FBFBFC;">
            <td style="padding:10px 16px;font-weight:600;font-size:14px;">Current Address:</td>
            <td style="padding:10px 16px;font-size:14px;color:#212529;white-space:pre-wrap;">${currentAddress || '-'}</td>
          </tr>
        </table>

        <!-- Contributions -->
        <h3 style="margin:28px 0 12px 0;font-size:16px;color:#2A2346;border-bottom:2px solid #EFEAF5;padding-bottom:8px;">
          🤝 Areas of Willing Contribution to College
        </h3>
        <div style="background-color:#FBFBFC;border:1px solid #EAEAEA;border-radius:8px;padding:16px;line-height:2;">
          ${contributionBadges}
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color:#F8F8FA;border-top:1px solid #EAEAEA;padding:18px 28px;text-align:center;font-size:12px;color:#7A7A7A;">
        Ethiraj College Alumnae Association (ECAA) Portal Notification<br>
        Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

/**
 * Alumna Acknowledgement Email Template
 */
exports.userTemplate = (data) => {
  const { name } = data;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to Ethiraj College Alumnae Association</title>
</head>
<body style="font-family:'Segoe UI',Arial,sans-serif;background-color:#F5F5FA;margin:0;padding:24px;color:#212529;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background-color:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">
    <tr>
      <td style="background:linear-gradient(135deg, #4A3F6D 0%, #2A2346 100%);padding:30px 24px;text-align:center;color:#FFFFFF;">
        <h2 style="margin:0 0 6px 0;font-size:20px;letter-spacing:1px;">ETHIRAJ COLLEGE FOR WOMEN</h2>
        <p style="margin:0;font-size:13px;opacity:0.85;">ALUMNAE ASSOCIATION (ECAA)</p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 24px;">
        <h3 style="margin:0 0 16px 0;color:#2A2346;font-size:18px;">Welcome Home, ${name}!</h3>
        <p style="font-size:14px;line-height:1.6;color:#495057;">
          Thank you for registering with the <strong>Ethiraj College Alumnae Association</strong>. Your details have been successfully received and recorded in the college alumnae database.
        </p>
        <p style="font-size:14px;line-height:1.6;color:#495057;">
          We deeply cherish your connection with your alma mater. The college committee will keep you updated regarding upcoming alumni reunions, mentorship initiatives, guest speaker sessions, and institutional developments.
        </p>
        <div style="margin:24px 0;padding:16px;background-color:#F8F6FB;border-left:4px solid #56507A;border-radius:4px;">
          <p style="margin:0;font-size:13px;color:#4A3F6D;font-style:italic;">
            "To strive, to seek, to find, and not to yield" — Once an Ethirajian, Always an Ethirajian.
          </p>
        </div>
        <p style="font-size:14px;color:#495057;">
          Warm regards,<br>
          <strong>Ethiraj College Alumnae Association (ECAA)</strong><br>
          Chennai, India
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color:#F8F8FA;border-top:1px solid #EAEAEA;padding:16px;text-align:center;font-size:12px;color:#7A7A7A;">
        For any queries, please write to <a href="mailto:alumnae@ethirajcollege.edu.in" style="color:#003BD1;">alumnae@ethirajcollege.edu.in</a>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
