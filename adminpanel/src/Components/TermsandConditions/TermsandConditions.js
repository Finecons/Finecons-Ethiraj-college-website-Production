

// import React, { useState } from 'react';
// import { Checkbox, Typography, Link } from '@mui/material';


// function TermsandConditions() {
//     const [checked, setChecked] = useState(false);

//     const handleChange = (event) => {
//         setChecked(event.target.checked);
//     };

//     return (
//         <div style={{display:"flex",alignItems:"center",pt:2}}>
//             <Checkbox
//                 checked={checked}
//                 onChange={handleChange}
//                 inputProps={{ 'aria-label': 'accept terms and conditions' }}
//             />
//             <Typography sx={{fontSize:"14px"}}>
//                 I accept all the{' '}
//                 <Link href="https://www.goldstake.com/terms" target="_blank" color="#C38F51">
//                     Terms & Conditions
//                 </Link>{' '}
//                 and{' '}
//                 <Link href="https://www.goldstake.com/privacy-policy" target="_blank" color="#C38F51">
//                     Privacy Policies
//                 </Link>{' '}
//                 of goldstake.com
//             </Typography>
//         </div>
//     );
// }

// export default TermsandConditions;


import React from 'react';
import { Checkbox, Typography, Link } from '@mui/material';

function TermsandConditions({ checked, onCheckChange }) {
    return (
        <div style={{ display: "flex", alignItems: "center", paddingTop: "16px" }}>
            <Checkbox
                checked={checked}
                onChange={(e) => onCheckChange(e.target.checked)}
                inputProps={{ 'aria-label': 'accept terms and conditions' }}
            />
            <Typography sx={{ fontSize: "14px" }}>
                I accept all the{' '}
                <Link href="https://www.goldstake.com/terms" target="_blank" color="#C38F51">
                    Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="https://www.goldstake.com/privacy-policy" target="_blank" color="#C38F51">
                    Privacy Policies
                </Link>{' '}
                of goldstake.com
            </Typography>
        </div>
    );
}

export default TermsandConditions;
