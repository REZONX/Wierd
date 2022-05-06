import { style } from "@vanilla-extract/css";
import { clearFix } from "../../public/style.css";

export const container = style([
    {
        position: "relative",
        zIndex:"5",
        boxShadow:"0 0 20px rgb(0 0 0 / 25%)",
        marginBottom:"68rem",
    },
])

export const inside = style([
    {
        background: "white"
    },
    clearFix
])