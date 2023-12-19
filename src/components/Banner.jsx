import "./styling.css";
import satData from "./satData";

const Banner = ({ sat }) => {

    const SatBgImg = [...new Set(sat.map((data) => data.orbitType))];  //// orbitType for 3 buttons, Low, Medium, High
    
    return (
        <>
        <div className={SatBgImg.length > 1 ? "bg-galaxy" : "bg-galaxy spinning-" + SatBgImg}></div>
        <header>Orbit Report</header>
        <p style={{color: "white"}} >Click on the buttons to see the satellites in that orbit type</p>
        </>
    )
}
export default Banner;