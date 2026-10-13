// // // import React, { useContext, useState } from "react";
// // // import "./Item.css";
// // // import { Link } from "react-router-dom";
// // // import ServiceTypeModal from "../../Pages/Customer/Pos_page/VolumeModal";
// // // import VolumeModal from "../../Pages/Customer/Pos_page/VolumeModal";
// // // // import { RefreshContext } from "../../Context/RefreshContext";
// // // // import Cart from "../../Pages/Cart";

// // // const Item = (props) => {
// // //     const [isModalOpen, setModalOpen] = useState(false);

// // //     // Function to handle modal open
// // //     const handleOpenModal = () => {
// // //         setModalOpen(true);
// // //     };

// // //     // Function to handle modal close
// // //     const handleCloseModal = () => {
// // //         setModalOpen(false);
// // //     };

// // //     // Function to handle saving in modal
// // //     const handleSaveModal = () => {
// // //         console.log("Save button clicked");
// // //         // Add any saving logic here
// // //         handleCloseModal(); // Close modal after saving
// // //     };



// // //     return (
// // //         <div className="item" onClick={handleOpenModal}>
// // //             {" "}
// // //             <div className="full-cart" key={props.key}>
// // //                 {/* <Link
// // //                     className="item-Link"
// // //                     to={`/product/${props.id}`}
// // //                     onClick={window.scrollTo(0, 0)}
// // //                 > */}
// // //                 <div alt="Cart" class="cart-image Item-img">
// // //                     <img src={props.image1} alt="" class="Item-img-1" />
// // //                     <img src={props.image2} alt="" class="Item-img-2" />
// // //                 </div>
// // //                 {/* </Link> */}
// // //                 {/* <div className="item-sale-div">
// // //                     {props.sale ? (
// // //                         <p className="item-sale bg-primary text-white">sale</p>
// // //                     ) : null}
// // //                 </div> */}

// // //                 <div className="card-body" >
// // //                     <a className="card-title Item-a" href="kkk">
// // //                         {props.heading}
// // //                     </a>
// // //                     <p className="card-text Item-p">
// // //                         <span className="offer-price">{props.offerprice}</span>
// // //                         <span>&nbsp;{props.RegularPrice}</span>
// // //                     </p>
// // //                     <div className="text-center">
// // //                         {/* <button
// // //                             className="Item-button"
// // //                             //   onClick={() => {
// // //                             //     addToCart(props.id);
// // //                             //   }}
// // //                             type="button"
// // //                             data-bs-toggle="offcanvas"
// // //                             data-bs-target="#offcanvasWithBothOptions"
// // //                             aria-controls="offcanvasWithBothOptions"
// // //                         >
// // //                             {props.button}
// // //                         </button> */}

// // //                         <div
// // //                             class="offcanvas offcanvas-end"
// // //                             data-bs-scroll="true"
// // //                             tabindex="-1"
// // //                             id="offcanvasWithBothOptions"
// // //                             aria-labelledby="offcanvasWithBothOptionsLabel"
// // //                         >
// // //                             <div class="offcanvas-header">
// // //                                 <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
// // //                                     Your cart
// // //                                 </h5>
// // //                                 <button
// // //                                     type="button"
// // //                                     class="btn-close"
// // //                                     data-bs-dismiss="offcanvas"
// // //                                     aria-label="Close"
// // //                                 ></button>
// // //                             </div>

// // //                             <VolumeModal
// // //                                 open={isModalOpen}
// // //                                 onClose={handleCloseModal}
// // //                                 onSave={handleSaveModal} // Pass the save handler
// // //                             />
// // //                             {/* <div class="offcanvas-body d-flex flex-column justify-content-between">
// // //                 <div>
// // //                   <Cart />
// // //                 </div>
// // //                 <div>
// // //                   <hr></hr>
// // //                   <div className="d-flex justify-content-between">
// // //                     <div className="subtotal-cart-item">Subtotal</div>
// // //                     <div className="total-price-cart-item">
// // //                      ${totalRegularPrice}.00 USD 
// // //                     </div>
// // //                   </div>
// // //                   <p className="total-price-cart-item-p">
// // //                     Taxes and shipping calculated at checkout
// // //                   </p>
// // //                   <div className="text-center">
// // //                     <div
// // //                       type="button"
// // //                       class="btn btn-primary total-price-cart-item-btn animate-button"
// // //                     >
// // //                       Check out
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div> */}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Item;



// // import React, { useContext, useState } from "react";
// // import "./Item.css";
// // import { Link } from "react-router-dom";
// // import ServiceTypeModal from "../../Pages/Customer/Pos_page/VolumeModal";
// // import VolumeModal from "../../Pages/Customer/Pos_page/VolumeModal";
// // // import { RefreshContext } from "../../Context/RefreshContext";
// // // import Cart from "../../Pages/Cart";

// // const Item = (props) => {




// //     return (
// //         <div className="item" >
// //             {" "}
// //             <div className="full-cart" key={props.key} onClick={() => props.handleOpenModal(props.id)}>
// //                 {/* <Link
// //                     className="item-Link"
// //                     to={`/product/${props.id}`}
// //                     onClick={window.scrollTo(0, 0)}
// //                 > */}
// //                 <div alt="Cart" class="cart-image Item-img">
// //                     <img src={props.image1} alt="" class="Item-img-1" />
// //                     <img src={props.image2} alt="" class="Item-img-2" />
// //                 </div>
// //                 {/* </Link> */}
// //                 {/* <div className="item-sale-div">
// //                     {props.sale ? (
// //                         <p className="item-sale bg-primary text-white">sale</p>
// //                     ) : null}
// //                 </div> */}

// //                 <div className="card-body" >
// //                     <a className="card-title Item-a" href="kkk">
// //                         {props.heading}
// //                     </a>
// //                     <p className="card-text Item-p">
// //                         <span className="offer-price">{props.offerprice}</span>
// //                         <span>&nbsp;{props.RegularPrice}</span>
// //                     </p>
// //                     <div className="text-center">
// //                         {/* <button
// //                             className="Item-button"
// //                             //   onClick={() => {
// //                             //     addToCart(props.id);
// //                             //   }}
// //                             type="button"
// //                             data-bs-toggle="offcanvas"
// //                             data-bs-target="#offcanvasWithBothOptions"
// //                             aria-controls="offcanvasWithBothOptions"
// //                         >
// //                             {props.button}
// //                         </button> */}

// //                         {/* <div
// //                             class="offcanvas offcanvas-end"
// //                             data-bs-scroll="true"
// //                             tabIndex="-1"
// //                             id="offcanvasWithBothOptions"
// //                             aria-labelledby="offcanvasWithBothOptionsLabel"
// //                         >
// //                             <div class="offcanvas-header">
// //                                 <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
// //                                     Your cart
// //                                 </h5>
// //                                 <button
// //                                     type="button"
// //                                     class="btn-close"
// //                                     data-bs-dismiss="offcanvas"
// //                                     aria-label="Close"
// //                                 ></button>
// //                             </div> */}



// //                         {/* </div> */}
// //                     </div>
// //                 </div>
// //             </div>
// //             <VolumeModal
// //                 open={props.isModalOpen}
// //                 onClose={props.handleCloseModal}
// //                 onSave={props.handleSaveModal} // Pass the save handler
// //                 heading={props.heading}
// //             />
// //         </div>
// //     );
// // };

// // export default Item;







// import React, { useState } from "react";
// import "./Item.css";
// import VolumeModal from "../../Pages/Customer/Pos_page/VolumeModal";

// const Item = (props) => {
//     // Step 1: Add state to store the heading of the clicked item
//     const [selectedHeading, setSelectedHeading] = useState("");

//     // Step 2: Function to handle item click and open modal
//     const handleItemClick = (id, heading) => {
//         setSelectedHeading(heading); // Set the selected heading
//         props.handleOpenModal(id);   // Call the parent's method to open modal
//     };

//     return (
//         <div className="item">
//             <div className="full-cart" key={props.key} onClick={() => handleItemClick(props.id, props.heading)}>
//                 <div alt="Cart" className="cart-image Item-img">
//                     <img src={props.image1} alt="" className="Item-img-1" />
//                     <img src={props.image2} alt="" className="Item-img-2" />
//                 </div>
//                 <div className="card-body">
//                     <a className="card-title Item-a" href="kkk">
//                         {props.heading}
//                     </a>
//                     <p className="card-text Item-p">
//                         <span className="offer-price">{props.offerprice}</span>
//                         <span>&nbsp;{props.RegularPrice}</span>
//                     </p>
//                 </div>
//             </div>

//             {/* Step 3: Pass selectedHeading to the modal */}
//             <VolumeModal
//                 open={props.isModalOpen}
//                 onClose={props.handleCloseModal}
//                 onSave={props.handleSaveModal}
//                 heading={selectedHeading}  // Pass the clicked heading to the modal
//             />
//         </div>
//     );
// };

// export default Item;



import React from "react";
import "./Item.css";
import VolumeModal from "../../Pages/Customer/Pos_page/VolumeModal";

const Item = (props) => {
    // Step 2: Function to handle item click and open modal
    const handleItemClick = (id, heading) => {
        props.onItemClick(id, heading); // Call the parent's method to open modal with id and heading

    };

    return (
        <div className="item">
            <div className="full-cart" key={props.id} onClick={() => handleItemClick(props.id, props.heading)}>
                <div alt="Cart" className="cart-image Item-img">
                    <img src={props.image1} alt="" className="Item-img-1" />
                    <img src={props.image2} alt="" className="Item-img-2" />
                </div>
                <div className="card-body">
                    <a className="card-title Item-a" href="#">
                        {props.heading}
                    </a>
                    <p className="card-text Item-p">
                        <span className="offer-price">{props.offerprice}</span>
                        <span>&nbsp;{props.RegularPrice}</span>
                    </p>
                </div>
            </div>

            {/* Step 3: Pass the selected heading and modal state to the modal */}
            {props.isModalOpen && (
                <VolumeModal
                    open={props.isModalOpen}
                    onClose={props.handleCloseModal}
                    onSave={props.handleSaveModal}
                    heading={props.selectedHeading} // Pass the selected heading to the modal
                />
            )}
        </div>
    );
};

export default Item;
