import {useEffect, useState} from 'react'
import GridLoader from "react-spinners/GridLoader";
import "./LoadingScreen.css";

function LoadingScreen() {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1000)

    }, [])
    return(
        <div className={"overlay"}>
            <GridLoader
                color={"#6adac3"}
                loading={loading}
                size={30}
            />
        </div>
    )
}

export default LoadingScreen;