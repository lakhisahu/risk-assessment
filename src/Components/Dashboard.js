function Dashboard() {
  return (
    <>
      <div className="main">
        <h3>Library</h3>
        <div className="row" style={{marginTop:"30px"}}>
          <div className="col-md-6" style={{width:"47%"}}>
            <div class="card" style={{ width: '32rem',height:"190px" ,marginBottom:"20px"}}>
              <div class="card-body">
                <div class="card-title d-flex align-items-center">
                <i style={{color:"blue"}} class="fa-solid fa-bars m-3"></i>
                <h5 style={{marginBottom:"5px",color:"blue"}}>Risk Scenarios</h5>
                  </div>
               
                <p style={{marginLeft:"15px"}} class="card-text">Anticipate and address potential cybersecurity risks to business.</p>
                <hr/>
                <div className="d-flex" style={{color:"#787676",fontWeight:"500"}}>
                  <div style={{marginRight:"15px",marginLeft:"14px"}} className="d-flex">
                  <p>All Scenarios:</p><b>40</b>
                  </div>
                  <div style={{marginRight:"15px"}} className="d-flex">
                  <p>Published:</p><b>32</b>
                  </div>
                  <div style={{marginRight:"15px"}} className="d-flex">
                  <p>Disabled:</p><b>3</b>
                  </div>
                  <div style={{marginRight:"15px"}} className="d-flex">
                  <p>Draft:</p><b>5</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{width:"47%"}}>
            <div class="card" style={{ width: '32rem',height:"190px" }}>
              <div class="card-body">
                <div class="card-title d-flex align-items-center">
                <i style={{color:"blue"}} class="fa-solid fa-bars m-3"></i>
                <h5 style={{marginBottom:"5px",color:"blue"}}>Assessment</h5>
                  </div>
               
                <p style={{marginLeft:"15px"}} class="card-text">Assess risk scenarios to identify net risk scores</p>
                <hr/>
               
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{width:"47%"}}>
            <div class="card" style={{ width: '32rem',height:"190px" }}>
              <div class="card-body">
                <div class="card-title d-flex align-items-center">
                <i style={{color:"blue"}} class="fa-solid fa-gem m-3"></i>
                <h5 style={{marginBottom:"5px",color:"blue"}}>Assessment</h5>
                  </div>
               
                <p style={{marginLeft:"15px"}} class="card-text">Generate reports for the business and security leaders.</p>
                <hr/>
               
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
export default Dashboard