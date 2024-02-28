function AssesmentDetails({ selectedItem }) {
    var likehoodScore = ["Rare", "Periodic", "Frequent", "Often", "Always"];
    var businessImpact = ["Very Low","Low","Medium","High","Critical"]
    return (
        <>
            <div className="card" style={{ width: "570px", height: "400px" }}>
                <div className="d-flex m-3" style={{ height: "40px" }}>

                    <b style={{ color: "#575555", width: "150px" }}>Risk Scenario -</b><b style={{ color: "#7f7b7b" }}>{selectedItem['Risk Scenario']}</b>
                </div>
                <ul class="nav nav-underline">
                    <li class="nav-item">
                        <a class="nav-link active" role="tab" data-bs-toggle="tab" aria-current="page" href="#likehoodScore">Likelihood Score</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" role="tab" data-bs-toggle="tab" href="#businessImpact">Business Impact</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="likehoodScore">
                        <ul class="list-group list-group-horizontal mx-3 my-2">
                            {
                                likehoodScore.map(e => (
                                    <li className={"list-group-item" + (selectedItem['Likelihood Score Text'] == e ? ' active' : '')}>{e}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane" id="businessImpact">
                    <ul class="list-group list-group-horizontal mx-3 my-2">
                            {
                                businessImpact.map(e => (
                                    <li className={"list-group-item" + (selectedItem['Business Impact Score Text'] == e ? ' active' : '')}>{e}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AssesmentDetails