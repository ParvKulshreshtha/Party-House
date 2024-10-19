// store/slices/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Location {
  city: string;
  code: string;
}


interface GlobalSlice {
  location: Location;
}

const initialState: GlobalSlice = { location: {city:"",code:""} };

const globalSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    selectLocation(state, action){
        state.location = action.payload
    }
  },
});

export const { selectLocation } = globalSlice.actions;
export default globalSlice.reducer;
