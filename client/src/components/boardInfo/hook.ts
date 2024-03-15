import { useDispatch } from "react-redux";
import { setPageVisibility } from "../../features/PageInformationSlice";
import React from "react";
import { setDescriptionTextVisible, setEditOpen } from "../../features/visibilitySlice";


export const usePageInformation = () => {

    const dispatch = useDispatch()
    const boardInfoPage = document.querySelector('.boardInformation')

    const handleShowMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setPageVisibility(true))

        boardInfoPage.classList.add('show')
    }

    const handleShowMenuClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(setPageVisibility(false))
        boardInfoPage.classList.remove('show')
        boardInfoPage.classList.add('hide')
        dispatch(setEditOpen(false));
        dispatch(setDescriptionTextVisible(true));
    }

    return { handleShowMenuClick, handleShowMenuClose }

}
