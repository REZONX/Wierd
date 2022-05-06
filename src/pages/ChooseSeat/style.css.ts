import { style } from "@vanilla-extract/css";

export const ticket = style({
    cursor: "default",
    position: "relative",
    fontSize:"1.3rem",
    color:"#f03d37",
    display: "inline-block",
    width: "6rem",
    height: "3rem",
    lineHeight:"3rem",
    textAlign:"center",
    margin: "0 12px 10px 0",
})

export const screen = style({
    width: "550px",
    paddingTop:'50px',
    textAlign:"center",
    fontSize:'16px',
    color:"#666",
    backgroundPositionX:'center',
    position: "relative",
    margin: "40px 0 40px 0 ",
})

export const row = style({
    whiteSpace:"nowrap",
    marginTop:"10px",
    padding: "0 10px",
    textAlign:"center",
    display: "flex",
})

export const seatContent = style({
    marginBottom:"40px",
    overflowX:"scroll",
    width: "90%",
    padding: "10px",
})

export const seatChosen = style({
    marginTop:"20px",
    marginLeft:"42px",
    marginBottom:"20px",
    position: "relative",
    top: "-5px",
})

export const seatEmpty = style({
    // background: 'url("../../assets/sofa-empty.png") no-repeat',
    backgroundSize:"cover",
})

export const seatPick = style({
    // background: 'url("../../assets/sofa-pick.png") no-repeat',
    backgroundSize:"cover",
})

export const seatSold = style({
    // background: 'url("../../assets/sofa-forbidden.png") no-repeat',
    backgroundSize:"cover",
})

export const seatExample = style({
    display: "flex",
    alignItems:"center",
    margin: "20px 0 0 0",
})

export const seat = style({
    display:"inline-block",
    width: "30px",
    height: "26px",
    margin: "0 5px",
    backgroundPosition:" 0 1px",
})

export const whole = style({
    
})