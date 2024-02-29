import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const useUserHook = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    useEffect(() => {

    },[show])

    const handleAddUserButton = (e: React.FormEvent) => {
        e.preventDefault()
        //dispatch()
        setShow(true)

    }
    return { show, setShow, handleAddUserButton }
}

export default useUserHook
