"use client"
import React, { useEffect, useState } from 'react'

interface HeaderSizedBoxProps {
    id: string
    defaultHeight?: number
}

const HeaderSizedBox: React.FC<HeaderSizedBoxProps> = ({ id, defaultHeight = 100 }) => {
    const [height, setHeight] = useState(defaultHeight)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const headerElement = document.getElementById('header')
        if (headerElement) {
            const newHeight = headerElement.offsetHeight
            setHeight(newHeight)
            // If id is not empty, add an offset equal to the newHeight
            setOffset(id ? newHeight : 0)
        }
    }, [id]) // Add id as a dependency to re-run the effect if id changes

    return <div id={id} style={{ height: `${height}px`, marginTop: `-${offset}px` }} />
}

export default HeaderSizedBox