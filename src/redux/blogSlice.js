import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
    },
    reducers: {
        addBlogs(state, action) {
            state.blogs.push(action.payload)
        },
        getBlog(state, blogId) {
            state.blogs.find(blog => blog.id === blogId);   
        }
    }
})

export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find(blog => blog.id === blogId);

export const {addBlogs, getBlog} = blogSlice.actions

export default blogSlice.reducer;