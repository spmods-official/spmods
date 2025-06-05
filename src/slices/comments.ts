import { createSlice } from "@reduxjs/toolkit";
import type { Comment } from "@/types/comment";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CommentState {
  list: Comment[];
}

const initialState: CommentState = {
  list: [],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Omit<Comment, "id">>) => {
      const comment: Comment = {
        id: crypto.randomUUID(), // temporarily use cryptography for comment id
        ...action.payload,
      };
      state.list.push(comment);
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
