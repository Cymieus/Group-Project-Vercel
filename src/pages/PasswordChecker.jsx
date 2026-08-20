import { useState } from "react"

function PasswordChecker() {
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState("")
  const [message, setMessage] = useState("")

  function handleCheck(e) {
    e.preventDefault()

    if (password === "") {
      setStrength("")
      setMessage("Please enter a password.")
      return
    }

    const length = password.length

    if (length < 6) {
      setStrength("Weak")
      setMessage("Weak – Create a stronger password.")
    } else if (length < 10) {
      setStrength("Medium")
      setMessage("Medium – Consider adding more characters.")
    } else {
      setStrength("Strong")
      setMessage("Strong – You can use this password.")
    }
  }

  function handleClear() {
    setPassword("")
    setStrength("")
    setMessage("")
  }

  const isSuccess = strength === "Strong"
  const isWarning = strength === "Medium"
  const isDanger = strength === "Weak"

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
          <h2 style={{ margin: 0 }}>Password Strength Checker</h2>
          <p style={{ margin: 0 }}>Activity 3</p>
        </div>

        <form onSubmit={handleCheck}>
          <div style={{ width: "320px", padding: "20px", background: "#fffefe" }}>

            <label>Password</label>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}></input>

            {message !== "" && (
              <p style={{ textAlign: "center", padding: "12px", borderRadius: "8px", marginBottom: "15px", ...boxStyle }}>
                {message}
              </p>
            )}

            <button type="submit" style={{ width: "100%", padding: "10px", background: "#3b33ca", color: "white", border: "none", borderRadius: "8px", marginBottom: "10px" }}> Check Password</button>
            <button type="button" onClick={handleClear} style={{ width: "100%", padding: "10px", background: "white", color: "#3b33ca", border: "1px solid #3b33ca", borderRadius: "8px" }}> Clear </button>

          </div>
        </form>
      </div>

    </div>
  )
}

export default PasswordChecker
