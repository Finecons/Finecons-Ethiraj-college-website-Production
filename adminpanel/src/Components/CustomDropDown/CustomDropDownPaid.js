// // CustomDropdownMui.js
// import React from "react";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import "./CustomDropdownMui.css";
// import "../ComponentsCss/componet.css";
// import { InputLabel } from "@mui/material";
// import { Field, ErrorMessage } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import actions from "../../ReduxStore/actions";

// const CustomDropDownPaid = ({
//     label,
//     name,
//     options,
//     custPlaceholder,
//     setFieldValue,
//     selectmovieIdfn,
//     selectCategoryIdfn,
//     onChange,
//     Ordered_id,
//     datas,
//     ...rest
// }) => {
//     console.log(options, "options122121")

//     const dispatch = useDispatch();
//     // const [submittedValues, setSubmittedValues] = useState([]); // To store submitted UTR and images


// console.log(datas,"dsdsdsdsd")

//     const { OperatorPaidStatusChange } = useSelector(
//         (state) => state?.OperatorPaidStatusChange
//     );


//     const handleDropdataClick = () => {


//         const data = {
//             data: {
//                 // paymentProofImages: submittedValues
//             }, method: "put", apiName: `updateOrder/${Ordered_id}`
//         };
//         // console.log("Dispatching MOVIESTABLEGETALL action:", data);
//         dispatch(actions.OPERATORPAIDSTATUSCHANE(data));
//         // setSubmittedValues([])
//         // setAnchorEl(event.currentTarget);
//     }

//     return (
//         <div style={{ width: "95%" }}>
//             {label && (
//                 <div>
//                     <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "700" }}
//                     >
//                         {label}
//                     </label>
//                 </div>
//             )}
//             {/* <Field
//         as="select"
//         id={name}
//         name={name}

//         {...rest}
//         className="customDropdown-input"

//       > */}
//             <Field name={name}>
//                 {({ field, form }) => (
//                     <select
//                         id={name}
//                         {...field}
//                         {...rest}
//                         className="customDropdown-input"
//                         onChange={(e) => {
//                             const selectedValue = e.target.value;
//                             form.setFieldValue(name, selectedValue);  // Update Formik field value
//                             if (onChange) onChange(e);                // Call custom onChange handler if provided
//                         }}
//                     >
//                         {custPlaceholder && (
//                             <option value="" disabled className="customDropdown-disabled-option">
//                                 {custPlaceholder ? custPlaceholder : "Select dropddown"}
//                             </option>
//                         )}
//                         {options.map((option) => (
//                             <option key={option.value} value={option.value}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>
//                 )}
//             </Field>
//             <ErrorMessage name={name} component="div" className="inputs-error-msg" />
//         </div>
//     );
// };

// export default CustomDropDownPaid;



// CustomDropdownMui.js
import React, { useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";
import "./CustomDropdownMui.css";
import "../ComponentsCss/componet.css";

const CustomDropDownPaid = ({
    label,
    name,
    options,
    custPlaceholder,
    value,
    setFieldValue,
    onChange,
    Ordered_id,
    onClick,
    selectedOrderedId,
    datas,
    ...rest
}) => {

    useEffect(() => {
        if (value) {
            setFieldValue(name, value);
        }
    }, [value, setFieldValue, name]);

    const dispatch = useDispatch();
    console.log(options, "optiosnssn")
    console.log(datas, "data")
    console.log(Ordered_id, "Ordered_id.....")
    console.log(selectedOrderedId, "selectedOrderedId")

    const { OperatorPaidStatusChange } = useSelector(
        (state) => state?.OperatorPaidStatusChange
    );
    console.log(OperatorPaidStatusChange, "OperatorPaidStatusChangeOperatorPaidStatusChange")

    const handleDropdataClick = (selectedValue) => {

        const data = {
            data: {
                // ...datas,
                paymentStatus: selectedValue
            },
            method: "put",
            apiName: `updateOrder/${Ordered_id}`
        };
        dispatch(actions.OPERATORPAIDSTATUSCHANE(data));
    }

    return (
        <div style={{ width: "95%" }}>
            {label && (
                <div>
                    <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "700" }}>
                        {label}
                    </label>
                </div>
            )}
            <Field name={name}>
                {({ field, form }) => (
                    <select
                        id={name}
                        {...field}
                        {...rest}
                        value={form.values[name]}
                      
                        className="customDropdown-input"
                        // onChange={(e) => {
                        //     const selectedValue = e.target.value;
                        //     form.setFieldValue(name, selectedValue);
                        //     if (onChange) onChange(e);
                        //     handleDropdataClick(selectedValue); // Call API function on change
                        // }}

                        onChange={(e) => {
                            onClick()
                            const selectedValue = e.target.value;
                            form.setFieldValue(name, selectedValue);
                            if (onChange) onChange(e);


                            // Find the selected option's label
                            const selectedOption = options.find(option => option.value === selectedValue);
                            const selectedLabel = selectedOption ? selectedOption.label : '';

                            handleDropdataClick(selectedLabel);  // Pass label to API call
                        }}
                    >
                        {custPlaceholder && (
                            <option value="" disabled className="customDropdown-disabled-option" >
                                {custPlaceholder ? custPlaceholder : "Select dropdown"}
                            </option>
                        )}
                        {/* {custPlaceholder && (
                            <option value="" disabled className="customDropdown-disabled-option">
                               Select an option
                            </option>
                        )} */}
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}
            </Field>
            <ErrorMessage name={name} component="div" className="inputs-error-msg" />
        </div>
    );
};

export default CustomDropDownPaid;
