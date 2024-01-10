import { supabases } from "./supabaseClient";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function Login(){
    const navigate = useNavigate();
   
    useEffect(() => {
      const handleAuthChangeState = async (event) => {
        if (event === "SIGNED_IN") {
          
          console.log("Successfully IN");
          navigate("/success");

        } else {
          
          console.log(event);
          navigate("/");
        }
      
    };

        supabases.auth.onAuthStateChange(handleAuthChangeState);
    }, [navigate]);

    return (

        <div className="App">
          <header className="App-header">
              <Auth 
                  supabaseClient={supabases}
                  appearance={{ theme : ThemeSupa }}
                  theme="dark"
                  providers={["google"]}
                  
              />
          </header>
        </div>

      );


}

export default Login;