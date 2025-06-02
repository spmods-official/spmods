import { createSlice } from '@reduxjs/toolkit';
import type { Comment } from '@/types/comment';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CommentState {
    list: Comment[];
}

const initialState: CommentState = {
    list: []
}

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<Comment>) => {
            state.list.push({...action.payload});
        }
    }
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;