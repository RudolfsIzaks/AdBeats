// Login.js
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleLogin = async (e) => {
       e.preventDefault();
       try {
           await signInWithEmailAndPassword(auth, email, password);
           console.log("User logged in");
           // Redirect or update state here
       } catch (err) {
           setError(err.message);
       }
   };

   return (
       <div>
           <h1>Log In</h1>
           <form onSubmit={handleLogin}>
               <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Email"
               />
               <input
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="Password"
               />
               <button type="submit">Log In</button>
               {error && <p>{error}</p>}
           </form>
       </div>
   );
};

export default Login;
