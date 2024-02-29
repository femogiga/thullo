import { useDispatch, useSelector } from "react-redux"
import { setVisibleModalVisibility } from "../../../../features/visibilitySlice"


/*
       *handleBoardVsibily handles the level
       * of privacy of created boards
      *
*/
const useUIHooks = () => {
    const dispatch = useDispatch()
    const visible = useSelector((state) => state.visibility.visible)

    const handleBoardVisibility = () => {
        dispatch(setVisibleModalVisibility(!visible))
    }

    return { handleBoardVisibility }

}

export default useUIHooks
