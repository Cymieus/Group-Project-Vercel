import { useState } from "react";

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [kwh, setKwh] = useState("");
  const [errorMes, setErrorMes] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (customerName == "" || kwh == "") {
      setErrorMes("Please fill out all fields.");
      setResult(null);
    } else if (parseFloat(kwh) < 0 || isNaN(parseFloat(kwh))) {
      setErrorMes("Please enter a valid kWh consumption.");
      setResult(null);
    } else {
      const numKwh = parseFloat(kwh);
      let rate = 0;

      if (numKwh <= 100) {
        rate = 10;
      } else if (numKwh <= 200) {
        rate = 12;
      } else if (numKwh <= 300) {
        rate = 15;
      } else {
        rate = 18;
      }

      const totalBill = numKwh * rate;
      const usageStatus =
        totalBill >= 5000 ? "High Electricity Usage" : "Normal Electricity Usage";

      setErrorMes("");
      setResult({
        name: customerName,
        kwh: numKwh,
        rate: rate,
        total: totalBill,
        status: usageStatus,
      });
    }
  }

  function clear() {
    setCustomerName("");
    setKwh("");
    setErrorMes("");
    setResult(null);
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f1f5f9" }}>
      <div style={{ width: "360px", border: "1px solid #eee", borderRadius: "12px", overflow: "hidden" }}>
        
        {/* Card Header */}
        <div style={{ background: "#3b33ca", color: "white", padding: "20px" }}>
          <h2 style={{ margin: 0 }}>Electricity Bill</h2>
          <p style={{ margin: 0 }}>Activity 4</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ width: "320px", padding: "20px", background: "#fffefe" }}>
            
            <label>Customer Name</label>
            <input
              placeholder="Enter Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}
            />

            <label>Consumption (kWh)</label>
            <input
              type="number"
              placeholder="Enter kWh"
              value={kwh}
              onChange={(e) => setKwh(e.target.value)}
              style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}
            />

            {errorMes != "" && (
              <p style={{ textAlign: "center", padding: "12px", borderRadius: "8px", marginBottom: "15px", background: "#fef2f2", color: "#ca3030", border: "1px solid #ffbebe" }}>
                {errorMes}
              </p>
            )}

            <div style={{ display: "flex", gap: "10px", marginBottom: result != null ? "15px" : "0px" }}>
              <button
                type="submit"
                style={{ flex: 1, padding: "10px", background: "#3b33ca", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}
              >
                Calculate
              </button>
              <button
                type="button"
                onClick={clear}
                style={{ flex: 1, padding: "10px", background: "#ca3333", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}
              >
                Clear
              </button>
            </div>

            {result != null && (
              <div style={{ textAlign: "left", padding: "16px", borderRadius: "8px", background: "#f8fcff", border: "1px solid #eee" }}>
                <p style={{ margin: "0 0 8px 0", color: "#808b9b", fontSize: "14px", fontWeight: "bold" }}>
                  Bill Summary
                </p>
                <p style={{ margin: "4px 0" }}><strong>Customer Name:</strong> {result.name}</p>
                <p style={{ margin: "4px 0" }}><strong>Consumption:</strong> {result.kwh} kWh</p>
                <p style={{ margin: "4px 0" }}><strong>Rate Applied:</strong> ₱{result.rate}/kWh</p>
                <p style={{ margin: "4px 0" }}><strong>Total Bill:</strong> ₱{result.total.toFixed(2)}</p>
                
                <p style={{ margin: "10px 0 0 0", fontWeight: "bold", color: result.status === "High Electricity Usage" ? "#ca3030" : "#30914d" }}>
                  Status: {result.status}
                </p>
              </div>
            )}

          </div>
        </form>

      </div>
    </div>
  );
}

export default ElectricityBill;