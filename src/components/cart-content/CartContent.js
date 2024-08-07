import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CartContent() {
    const { carts } = useSelector(state => state.carts)
    const dispatch = useDispatch()
    console.log(carts)

    return (
        <div>

        </div>
    )
}
