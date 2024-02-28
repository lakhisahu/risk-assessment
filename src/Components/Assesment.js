import { useContext, useState } from "react"
import { MyContext } from "../App"
import AssesmentDetails from "./AssesmentDetails"

function Assessment() {
    const {data} = useContext(MyContext)
    const [selectedItem,setSelectedItem] = useState(data[0]);
    const btnClick = (item) =>{
        setSelectedItem(item);
    }
    return (
        <>
            <div className="main d-flex">
                <div className="card" style={{ width: "450px", height: "400px",overflow:"scroll", overflowX: "hidden" }}>
                    <div class="card-header">
                        Risk Scenarios
                    </div>
                    <div className="d-flex align-items-center" style={{backgroundColor:"#e3e2e2"}}>
                        <input style={{height:"30px"}} className="form-control m-1" type="text" placeholder="Search risk scenarios" />
                        <b className="text-center m-1">Likelihood
                            Score</b>
                        <b className="text-center m-1">Business
                            Impact</b>
                    </div>
                    <div>
                        {data.map((e)=>{
                            return(
                                <>
                                <div className={`assesmentBox ${selectedItem == e && "assesmentBoxActive" }`} onClick={()=>btnClick(e)}>
                                    
                                <div className="assesmentText">
                                    <b>{e['Risk Scenario']}</b>
                                </div>
                                <i style={{width:"60px"}} class="fa-solid fa-circle-check"></i>
                                <i style={{width:"60px"}} class="fa-solid fa-circle-check"></i>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <AssesmentDetails selectedItem={selectedItem}/>
            </div>
        </>
    )
}
export default Assessment