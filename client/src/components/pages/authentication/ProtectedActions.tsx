import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
interface IProtectedActions{
  children:React.ReactNode
}
const ProtectedActions = ({ children }) => {
    const user = useSelector(state=>state.auth.user)
    const [deleteEditState, setDeleteEditState] = useState(false)
    useEffect(() => {

    },[deleteEditState])
  return (
      <div deleteEditState = {deleteEditState}>{children}</div>
  )
}

export default ProtectedActions
