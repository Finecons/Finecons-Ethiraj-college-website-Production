// import { createSlice } from '@reduxjs/toolkit';

// const headerSlice = createSlice({
//     name: 'header',
//     initialState: {
//         title: 'Default Header Name', // Initial header name
//     },
//     reducers: {
//         setHeaderName: (state, action) => {
//             state.title = action.payload; // Update header name
//         },
//     },
// });

// export const { setHeaderName } = headerSlice.actions;
// export default headerSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        title: '', // Initial header name
        subTitle: '', // Initial subheader name
    },
    reducers: {
        setHeaderName: (state, action) => {
            state.title = action.payload; // Update header name
        },
        setSubHeaderName: (state, action) => {
            state.subTitle = action.payload; // Update subheader name
        },
        setHeaderAndSubHeader: (state, action) => {
            const { title, subTitle } = action.payload; // Destructure payload
            if (title !== undefined) state.title = title;
            if (subTitle !== undefined) state.subTitle = subTitle;
        },
    },
});

export const { setHeaderName, setSubHeaderName, setHeaderAndSubHeader } = headerSlice.actions;
export default headerSlice.reducer;

    

