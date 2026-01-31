import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                items => items.id == action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
            
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedTost: () => {
            toast.success('Added to Collection', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeTost: () => {
            toast.error('Removed from Collection', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})

export const { addCollection, removeCollection, clearCollection, addedTost, removeTost } = collectionSlice.actions
export default collectionSlice.reducer;