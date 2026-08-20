import { useState } from "react"

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("")
  const [grade, setGrade] = useState("")
  const [message, setMessage] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  function handleCheck(e) {
    e.preventDefault()

    if (studentName.trim() === "") {
      setMessage("Please enter the student name.")
      return
    }

    if (grade.trim() === "" ) {
      setMessage("Please enter a valid grade.")
      return
    }
    setSubmittedName(studentName.trim())
    if (grade > 100) {
        setSubmittedName("")
        setGrade("")
      setMessage("Please enter a valid grade")
    }
    else if (grade >= 90) {
      setMessage("Excellent")
    } else if (grade >= 85) {
      setMessage("Very Good")
    } else if (grade >= 80) {
      setMessage("Good")
    } else if (grade >= 75) {
      setMessage("Passed")
    } 
     else {
      setMessage("Failed")
    }
  }

  function handleReset() {
    setStudentName("")
    setGrade("")
    setMessage("")
    setSubmittedName("")
  }

  let boxStyle = {}

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f1f5f9" }}>
      <div style={{ width: "360px", border: "1px solid #eee", borderRadius: "12px", overflow: "hidden" }}>
        <div style={{ background: "#3b33ca", color: "white", padding: "20px" }}>
          <h2 style={{ margin: 0 }}>Grade Evaluation</h2>
          <p style={{ margin: 0 }}>Activity 2</p>
        </div>
        <form onSubmit={handleCheck}>
          <div style={{ width: "320px", padding: "20px", background: "#fffefe" }}>
            <label>Student Name</label>
            <input type="text" placeholder="Enter Student Name" value={studentName} 
            onChange={(e) => {
              setStudentName(e.target.value)
              setMessage("")
              setSubmittedName("")
            }}
            style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}></input>

            <label>Grade</label>
            <input type="number" placeholder="e.g. 90" value={grade} 
            onChange={(e) => {
            setGrade(e.target.value)
            setMessage("")
            setSubmittedName("")
            }}
            style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}></input>

            {message !== "" && (
              <div style={{ padding: "12px", borderRadius: "8px", marginBottom: "15px", ...boxStyle }}>
                {submittedName !== "" && (
                  <p style={{ margin: "0 0 4px 0", fontWeight: "bold", textAlign: "center" }}>
                    Student {submittedName} , Grade: {grade}
                  </p>
                )}
                <p style={{ margin: 0, textAlign: "center" }}>{message}</p>
              </div>
            )}

            <button type="submit" style={{ width: "100%", padding: "10px", background: "#3b33ca", color: "white", border: "none", borderRadius: "8px", marginBottom: "10px" }}>Evaluate Grades</button>
            <button type="button" onClick={handleReset} style={{ width: "100%", padding: "10px", background: "white", color: "#3b33ca", border: "1px solid #3b33ca", borderRadius: "8px" }}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GradeEvaluation;