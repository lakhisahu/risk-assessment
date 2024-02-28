import { useContext,useState } from "react";
import { MyContext } from "../App";
import Pageination from "./Pageination";

function Library() {
  const { data } = useContext(MyContext)
  const [currentPage,setCurrentPage] = useState(1);
  const [dataPerPage,setDataPerPage] = useState(3);
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const currentData = data.slice(firstIndex,lastIndex);
  const [inputFields, setInputFields] = useState([
    { 
      id: 1, 
      placeholder: 'Enter Value',
      value1:"Industry",
      value2:"Domain",
      value3:"Client"
    }
  
  ]);
  const addMoreInput = () =>{
    const newInputFields = [
      ...inputFields,
      {
      id: inputFields.length + 1, 
      placeholder: 'Enter Value',
      value1:"Industry",
      value2:"Domain",
      value3:"Client"
      }
    ];
    setInputFields(newInputFields);
  }
  return (
    <>
      <button className="riskbutton" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Risk Scenario</button>
      <div className="main">
        {/* modal start */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Risk Scenario</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" id="modal-body">
                <div class="mb-1">
                  <label for="exampleFormControlInput1" class="form-label">Risk Scenario</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter risk scenario" />
                </div>
                <div class="mb-1">
                  <label for="exampleFormControlInput1" class="form-label">Risk Description</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter risk description" />
                </div>
                <div className="d-flex">
                  <div class="mb-1" style={{ width: "230px", marginRight: "20px" }}>
                    <label for="exampleFormControlInput1" class="form-label">Risk Field</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter risk field 1" />
                  </div>
                  <div class="mb-1" style={{ width: "230px" }}>
                    <label for="exampleFormControlInput1" class="form-label">Risk Field</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter risk field 2" />
                  </div>
                </div>
                {
                  inputFields.map(e=>(
                    <div className="d-flex">
                    <div class="mb-1" style={{ width: "230px", marginRight: "20px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Key</label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Select Key</option>
                        <option value={e.value1}>{e.value1}</option>
                        <option value={e.value2}>{e.value2}</option>
                        <option value={e.value3}>{e.value3}</option>
                      </select>
                    </div>
                    <div class="mb-1" style={{ width: "230px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Value</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder={e.placeholder} />
                    </div>
                  </div>
                  ))
                }
               
                <div className="d-flex mx-1" style={{color:"blue",width:"140px",cursor:"pointer"}} onClick={addMoreInput}>
                <i class="fa-solid fa-plus my-1"></i>
                <p className="mx-2">Add New Key</p>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* modal end */}
      
        <div className="libraryTopBar d-flex justify-content-between" style={{ width: "1036px" }}>
          <div className="d-flex">
            <i class="fa-solid fa-magnifying-glass" style={{ marginLeft: "10px" }}></i>
            <input type="text" placeholder="Search by keyword" className="form-control" style={{ width: "340px", paddingLeft: "35px" }} />
          </div>
          <div className="d-flex">
            <select class="form-select mx-2" aria-label="Default select example" style={{ width: "300px" }}>
              <option selected>Sort: Risk ID(Ascending)</option>
            </select>
            <select class="form-select" aria-label="Default select example" style={{ width: "100px" }}>
              <option selected>Filter</option>
            </select>
          </div>
        </div>
        {
          currentData.map((e) => {
            return (
              <>
                <div class="card" style={{ width: "1008px", marginLeft: "28px", marginTop: "10px" }}>
                  <div class="card-header" style={{ backgroundColor: "#eef5ff", padding: "15px" }} className="d-flex justify-content-between">
                    <div className="d-flex" style={{ color: "#6e6a6a" }}>
                      <b>{e["Risk ID"]}</b>
                      <div style={{ backgroundColor: "white", paddingLeft: "5px", paddingRight: "5px", marginLeft: "10px" }}>
                        <b>Industry:Healthcare</b>
                      </div>
                    </div>
                    <div className="d-flex" style={{ color: "#6e6a6a" }}>
                      <b className="mx-2">Last Updated: {e['Date Submitted']}</b>
                      <div class="form-check form-switch mx-2">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Enabled</label>
                      </div>
                      <i class="fa-solid fa-ellipsis-vertical mx-2"></i>
                    </div>
                  </div>
                  <b className="p-3">{e['Risk Scenario']}</b>
                </div>
              </>
            )
          })
        }

        <Pageination totalData={data.length} dataPerPage={dataPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
    </>
  )
}
export default Library;