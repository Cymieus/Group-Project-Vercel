
import { useState } from "react"

function App(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(

        <div>

            <form>

                <label>Username</label>
                <input></input>

                <label>Password</label>
                <input type="password"></input>

                <button type="submit">Login</button>

            </form>

        </div>
    );
}
