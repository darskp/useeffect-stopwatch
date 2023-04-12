import { useEffect, useState } from "react"

const Comp1 = () => {
    let [checking, setChecking] = useState(false);
    let [display, setDisplay] = useState(0);
    let handletoggle = () => {
        setChecking(pre => !pre);
    }
    let handlereset = () => {
        setChecking(false);
        setDisplay(0);
    }
    useEffect(() => {
        let displaytime;
        if(checking){
            displaytime = setInterval(() =>{
                setDisplay(pre => pre + 10);
            }, 10);
        }
        return () => clearInterval(displaytime)
    }, [checking])
    let time = new Date(display).toISOString().slice(11, -1);
    return (
        <div className="d-flex align-items-center flex-column justify-content-center bg-dark text-light" style={{ height: "91vh" }}>
            <div className="d-flex align-items-center flex-column justify-content-center text-center border border-light rounded-2" style={{ width: "350px", height: "220px" }}>
                <div className="mb-4">
                    <p className="fs-1 fw-bold">{time}</p>
                </div>
                <div>
                    {checking ? <button className="btn btn-danger me-3 px-4" onClick={handletoggle}>Stop</button>
                        : <button className="btn btn-primary me-3 px-4" onClick={handletoggle}>Start</button>}
                    <button className="btn btn-success px-4" onClick={handlereset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Comp1;