import React, { useEffect, useState } from 'react'

const useUserHook = () => {
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
