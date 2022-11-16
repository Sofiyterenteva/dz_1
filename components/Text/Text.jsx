import React from "react"
import css from "./Text.module.css"

export const Text = ({props}) => {
    return(
        <p className={css.text_text}>{props}</p>
    )
}