import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { postsActions } from "../store/post.slice";

const actions = {
    ...postsActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}