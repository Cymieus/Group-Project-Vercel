
import { useState } from "react"

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMes, setErrorMes] = useState("");

    function handleSubmit(e){

        if(username == "" && password ==""){
            setErrorMes("Please enter username and password")
        }

        else if(username == "admin" && password =="12345"){
            setErrorMes("Login successful")
        }

        else{
            setErrorMes("Invalid username or password")
        }

        e.preventDefault()

    }

    function logout(){
    setUsername("")
    setPassword("")
    setErrorMes("")
}


if (errorMes == "Login successful"){
    return(
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f1f5f9" }}>

        <div style={{ width: "360px", border: "1px solid #eee", borderRadius: "12px", overflow:"hidden"}}>
            <div style={{ background: "#3b33ca", color: "white", padding: "20px" }}>
                <h2 style={{ margin: 0 }}>Login Authentication</h2>
                <p style={{ margin: 0 }}>Activity 1</p>
            </div>

            <form onSubmit={handleSubmit}>

            <div style={{width: "320px", padding: "20px" , background: "#fffefe"}}>
               
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#dafce6", color: "#30914d", fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>✓</div>
                {errorMes != "" && <p style={{ textAlign: "center", padding: "12px", borderRadius: "8px", marginBottom: "15px", background: "#dafce6", color: "#30914d", border: "1px solid #45df51" }}>{errorMes}</p>}

                <div style={{ textAlign: "center", padding: "16px", borderRadius: "8px", marginBottom: "15px", background: "#f8fcff", border: "1px solid #eee" }}>
                    <p style={{ margin: 0, color: "#808b9b" }}>Welcome back,</p>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{username}</p>
                </div>


                <button type="submit" style={{ width: "100%", padding: "10px", background: "#ca3333", color: "white", border: "none", borderRadius: "8px"}} onClick={logout}>Logout</button>

            </div>

        </form>

        </div>


    </div>
    );
  }

else{
    return(
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f1f5f9" }}>

        <div style={{ width: "360px", border: "1px solid #eee", borderRadius: "12px", overflow:"hidden"}}>
            <div style={{ background: "#3b33ca", color: "white", padding: "20px" }}>
                <h2 style={{ margin: 0 }}>Login Authentication</h2>
                <p style={{ margin: 0 }}>Activity 1</p>
            </div>

             <form onSubmit={handleSubmit}>

            <div style={{width: "320px", padding: "20px", background: "#fffefe"}}>
                <label>Username</label>
                <input value={username} placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}></input>

                <label>Password</label>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" }}></input>

                {errorMes != "" && <p style={{ textAlign: "center", padding: "12px", borderRadius: "8px", marginBottom: "15px", background: "#fef2f2", color: "#ca3030", border: "1px solid #ffbebe" }}>{errorMes}</p>}

                <button type="submit" style={{ width: "100%", padding: "10px", background: "#3b33ca", color: "white", border: "none", borderRadius: "8px"}}>Login</button>

            </div>

        </form>

        </div>

       


    </div>
    );
}



}

export default Login;