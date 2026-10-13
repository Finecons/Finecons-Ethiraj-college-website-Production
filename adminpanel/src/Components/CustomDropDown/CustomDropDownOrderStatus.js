
// // // CustomDropdownMui.js
// // import React from "react";
// // import MenuItem from "@mui/material/MenuItem";
// // import Select from "@mui/material/Select";
// // import "./CustomDropdownMui.css";
// // import "../ComponentsCss/componet.css";
// // import { InputLabel } from "@mui/material";
// // import { Field, ErrorMessage } from "formik";
// // import { useDispatch, useSelector } from "react-redux";
// // import actions from "../../ReduxStore/actions";

// // const CustomDropDownPaid = ({
// //     label,
// //     name,
// //     options,
// //     custPlaceholder,
// //     setFieldValue,
// //     selectmovieIdfn,
// //     selectCategoryIdfn,
// //     onChange,
// //     Ordered_id,
// //     datas,
// //     ...rest
// // }) => {
// //     console.log(options, "options122121")

// //     const dispatch = useDispatch();
// //     // const [submittedValues, setSubmittedValues] = useState([]); // To store submitted UTR and images


// // console.log(datas,"dsdsdsdsd")

// //     const { OperatorPaidStatusChange } = useSelector(
// //         (state) => state?.OperatorPaidStatusChange
// //     );


// //     const handleDropdataClick = () => {


// //         const data = {
// //             data: {
// //                 // paymentProofImages: submittedValues
// //             }, method: "put", apiName: `updateOrder/${Ordered_id}`
// //         };
// //         // console.log("Dispatching MOVIESTABLEGETALL action:", data);
// //         dispatch(actions.OPERATORPAIDSTATUSCHANE(data));
// //         // setSubmittedValues([])
// //         // setAnchorEl(event.currentTarget);
// //     }

// //     return (
// //         <div style={{ width: "95%" }}>
// //             {label && (
// //                 <div>
// //                     <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "700" }}
// //                     >
// //                         {label}
// //                     </label>
// //                 </div>
// //             )}
// //             {/* <Field
// //         as="select"
// //         id={name}
// //         name={name}

// //         {...rest}
// //         className="customDropdown-input"

// //       > */}
// //             <Field name={name}>
// //                 {({ field, form }) => (
// //                     <select
// //                         id={name}
// //                         {...field}
// //                         {...rest}
// //                         className="customDropdown-input"
// //                         onChange={(e) => {
// //                             const selectedValue = e.target.value;
// //                             form.setFieldValue(name, selectedValue);  // Update Formik field value
// //                             if (onChange) onChange(e);                // Call custom onChange handler if provided
// //                         }}
// //                     >
// //                         {custPlaceholder && (
// //                             <option value="" disabled className="customDropdown-disabled-option">
// //                                 {custPlaceholder ? custPlaceholder : "Select dropddown"}
// //                             </option>
// //                         )}
// //                         {options.map((option) => (
// //                             <option key={option.value} value={option.value}>
// //                                 {option.label}
// //                             </option>
// //                         ))}
// //                     </select>
// //                 )}
// //             </Field>
// //             <ErrorMessage name={name} component="div" className="inputs-error-msg" />
// //         </div>
// //     );
// // };

// // export default CustomDropDownPaid;



// // CustomDropdownMui.js
// import React, { useEffect, useState } from "react";
// import { Field, ErrorMessage } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import actions from "../../ReduxStore/actions";
// import "./CustomDropdownMui.css";
// import "../ComponentsCss/componet.css";

// const CustomDropDownOrderStatus = ({
//     label,
//     name,
//     options,
//     custPlaceholder,
//     value,
//     setFieldValue,
//     onChange,
//     Ordered_id,
//     onClick,
//     selectedOrderedId,
//     datas,
//     ...rest
// }) => {

//     useEffect(() => {
//         if (value) {
//             setFieldValue(name, value);
//         }
//     }, [value, setFieldValue, name]);

//     const dispatch = useDispatch();
//     console.log(options, "optiosnssn")

//     console.log(Ordered_id, "Ordered_id.....")
//     // console.log(selectedOrderedId, "selectedOrderedId")

//     const { OrderStatusChange } = useSelector(
//         (state) => state?.OrderStatusChange
//     );
//     // console.log(OperatorPaidStatusChange, "OperatorPaidStatusChangeOperatorPaidStatusChange")


// const [orderStatusHistory_id,setOrderStatusHistory_id]=useState(0)
//     const handleDropdataClick = async(selectedValue) => {

//         const data2 = {
//             data: {},
//             method: "get",
//             apiName: `getAllOrderStatusHistoryByOrderId/${Ordered_id}`,
//         };
//         // Dispatch the action and handle the response to update the allStudentsData
//         const orderStatusHistory_id = await dispatch(actions.GETDROPDATAFORSTATUSCHANGE(data2))
//         console.log(orderStatusHistory_id?.payload,"payload")

//     }

//     useEffect(()=>{
//         const data = {
//             data: {
//                 // ...datas,
//                 orderStatusHistory_id: "13",
//                 order_status: selectedValue
//             },
//             method: "put",
//             apiName: `updateOrderStatusWithTime/${Ordered_id}`
//         };
//         dispatch(actions.ORDERSTATUSCHANGE(data));
//     },[orderStatusHistory_id])

//     return (
//         <div style={{ width: "95%" }}>
//             {label && (
//                 <div>
//                     <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "700" }}>
//                         {label}
//                     </label>
//                 </div>
//             )}
//             <Field name={name}>
//                 {({ field, form }) => (
//                     <select
//                         id={name}
//                         {...field}
//                         {...rest}
//                         value={form.values[name]}

//                         className="customDropdown-input"
//                         // onChange={(e) => {
//                         //     const selectedValue = e.target.value;
//                         //     form.setFieldValue(name, selectedValue);
//                         //     if (onChange) onChange(e);
//                         //     handleDropdataClick(selectedValue); // Call API function on change
//                         // }}

//                         onChange={(e) => {
//                             // onClick()
//                             const selectedValue = e.target.value;
//                             form.setFieldValue(name, selectedValue);
//                             if (onChange) onChange(e);


//                             // Find the selected option's label
//                             const selectedOption = options.find(option => option.value === selectedValue);
//                             const selectedLabel = selectedOption ? selectedOption.label : '';

//                             handleDropdataClick(selectedLabel);  // Pass label to API call
//                         }}
//                     >
//                         {custPlaceholder && (
//                             <option value="" disabled className="customDropdown-disabled-option" >
//                                 {custPlaceholder ? custPlaceholder : "Select dropdown"}
//                             </option>
//                         )}
//                         {/* {custPlaceholder && (
//                             <option value="" disabled className="customDropdown-disabled-option">
//                                Select an option
//                             </option>
//                         )} */}
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

// export default CustomDropDownOrderStatus;



import React, { useEffect, useState } from "react";
import { Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";
import "./CustomDropdownMui.css";
import "../ComponentsCss/componet.css";

const CustomDropDownOrderStatus = ({
    label,
    name, 
    options,
    custPlaceholder,
    value,
    setFieldValue,
    Ordered_id,
    ...rest
}) => {
    const dispatch = useDispatch();
    const [orderStatusHistory_id, setOrderStatusHistory_id] = useState(null);
    const [selectedValue, setSelectedValue] = useState(value || "");

    useEffect(() => {
        if (value) {
            setFieldValue(name, value);
            setSelectedValue(value);
        }
    }, [value, setFieldValue, name]);

    // const handleDropdataClick = async (selectedValue) => {
    //     const data = {
    //         data: {},
    //         method: "get",
    //         apiName: `getAllOrderStatusHistoryByOrderId/${Ordered_id}`,
    //     };

    //     // Dispatch action to fetch order status history
    //     const response = await dispatch(actions.GETDROPDATAFORSTATUSCHANGE(data));
    //     const orderHistoryData = response?.payload?.data;

    //     // Find the selected order status history based on selected value
    //     const selectedHistory = orderHistoryData?.find(
    //         (item) => item.order_status === selectedValue
    //     );

    //     if (selectedHistory) {
    //         const { orderStatusHistory_id } = selectedHistory;
    //         setOrderStatusHistory_id(orderStatusHistory_id);
    //         setSelectedValue(selectedValue);

    //         const updateData = {
    //             data: {
    //                 orderStatusHistory_id,
    //                 order_status: selectedValue,
    //             },
    //             method: "put",
    //             apiName: `updateOrderStatusWithTime/${Ordered_id}`,
    //         };
    //         dispatch(actions.ORDERSTATUSCHANGE(updateData));
    //     }
    // };


    const { OrderStatusChange } = useSelector(
        (state) => state?.OrderStatusChange
    );
    const handleDropdataClick = async (selectedValue) => {
        console.log(selectedValue, "selectedValueselectedValue")
        const data = {
            data: {},
            method: "get",
            apiName: `getAllOrderStatusHistoryByOrderId/${Ordered_id}`,
        };

        // Fetch order status history
        const response = await dispatch(actions.GETDROPDATAFORSTATUSCHANGE(data));
        const orderHistoryData = response?.payload?.data;

        // Find the selected order status history based on selected value
        const selectedHistory = orderHistoryData?.filter(
            (item) => {
                console.log(selectedValue,"consol");
                console.log(item.order_status,"consol11");
                
                return item.order_status === selectedValue;
            }
        );
        


        console.log(selectedHistory, "selectedHistoryselectedHistory")

        if (selectedHistory) {
            const  orderStatusHistory_id  = selectedHistory[0]?.orderStatusHistory_id;

           

            const updateData = {
                data: {
                    orderStatusHistory_id: orderStatusHistory_id,
                    order_status: selectedValue,
                },
                method: "put",
                apiName: `updateOrderStatusWithTime/${Ordered_id}`,
            };

            // Dispatch action to update the order status
            dispatch(actions.ORDERSTATUSCHANGE(updateData));
        } else {
            console.error("Selected order status not found in order history data");
        }
    };


    return (
        <div style={{ width: "95%" }}>
            {label && (
                <div>
                    <label
                        htmlFor={name}
                        className="input-heading12"
                        style={{ fontSize: "16px", fontWeight: "700" }}
                    >
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
                        onChange={(e) => {
                            const selectedValue = e.target.value;
                            form.setFieldValue(name, selectedValue);
                            handleDropdataClick(selectedValue);
                        }}
                    >
                        {custPlaceholder && (
                            <option value="" disabled className="customDropdown-disabled-option">
                                {custPlaceholder}
                            </option>
                        )}
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

export default CustomDropDownOrderStatus;
