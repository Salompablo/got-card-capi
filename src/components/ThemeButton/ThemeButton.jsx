import React from 'react'

export default function ThemeButton(props) {

    return (
    <button {...props}>{props.children}</button>
)
}
