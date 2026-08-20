<<<<<<< HEAD
function AttendanceChecker() {
    return (
        <div>
            <h1>Attendance Checker</h1>
            <p>This is the Attendance Checker page.</p>
        </div>
    );
}

export default AttendanceChecker;
=======
import { useState } from "react"

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("")
  const [timeIn, setTimeIn] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [submittedName, setSubmittedName] = useState("")
  const [submittedTime, setSubmittedTime] = useState("")

  function formatTime(time) {
    const hours = Math.floor(time)
    const minutes = Math.round((time - hours) * 60)
    const period = hours >= 12 ? "PM" : "AM"
    let displayHour = hours % 12
    if (displayHour === 0) displayHour = 12
    const displayMinutes = minutes.toString().padStart(2, "0")
    return `${displayHour}:${displayMinutes} ${period}`
  }

  function handleCheck(e) {
    e.preventDefault()
    const time = Number(timeIn)

    if (employeeName.trim() === "") {
      setStatus("")
      setMessage("Please enter the employee name.")
      return
    }

    if (timeIn.trim() === "" || Number.isNaN(time)) {
      setStatus("")
      setMessage("Please enter a valid time-in value.")
      return
    }

    setSubmittedName(employeeName.trim())
    setSubmittedTime(formatTime(time))

    if (time <= 8) {
      setStatus("On Time")
      setMessage("On Time – Good job!")
    } else if (time <= 9) {
      setStatus("Late")
      setMessage("Late – Please be on time tomorrow.")
    } else {
      setStatus("Very Late")
      setMessage("Very Late – Report to your supervisor.")
    }
  }

  function handleReset() {
    setEmployeeName("")
    setTimeIn("")
    setStatus("")
    setMessage("")
    setSubmittedName("")
    setSubmittedTime("")
  }

  const isSuccess = status === "On Time"
  const isWarning = status === "Late"
  const isDanger = status === "Very Late"

  const boxStyle = isSuccess
    ? { background: "#dafce6", color: "#30914d", border: "1px solid #45df51" }
    : isWarning
    ? { background: "#fff8e6", color: "#a5720a", border: "1px solid #ffd966" }
    : isDanger
    ? { background: "#fef2f2", color: "#ca3030", border: "1px solid #ffbebe" }
    : {}

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f1f5f9" }}>
      <div style={{ width: "360px", border: "1px solid #eee", borderRadius: "12px", overflow: "hidden" }}>
        <div style={{ background: "#3b33ca", color: "white", padding: "20px" }}>
          <h2 style={{ margin: 0 }}>Employee Attendance Checker</h2>
          <p style={{ margin: 0 }}>Activity 5</p>
        </div>
        <form onSubmit={handleCheck}>
          <div style={{ width: "320px", padding: "20px", background: "#fffefe" }}>
            <label>Employee Name</label>
            <input type="text" placeholder="Enter Employee Name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}></input>

            <label>Time In (e.g. 8.5 = 8:30 AM)</label>
            <input type="number" step="0.5" placeholder="e.g. 8.5" value={timeIn} onChange={(e) => setTimeIn(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}></input>

            {message !== "" && (
              <div style={{ padding: "12px", borderRadius: "8px", marginBottom: "15px", ...boxStyle }}>
                {submittedName !== "" && (
                  <p style={{ margin: "0 0 4px 0", fontWeight: "bold", textAlign: "center" }}>
                    {submittedName} — {submittedTime}
                  </p>
                )}
                <p style={{ margin: 0, textAlign: "center" }}>{message}</p>
              </div>
            )}

            <button type="submit" style={{ width: "100%", padding: "10px", background: "#3b33ca", color: "white", border: "none", borderRadius: "8px", marginBottom: "10px" }}>Check Attendance</button>
            <button type="button" onClick={handleReset} style={{ width: "100%", padding: "10px", background: "white", color: "#3b33ca", border: "1px solid #3b33ca", borderRadius: "8px" }}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AttendanceChecker
>>>>>>> 0b9c77611f92f3c460a999668d0dbdeedc54d5fa
