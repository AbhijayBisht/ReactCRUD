/* eslint-disable no-template-curly-in-string */
import { supabases } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import Crud from "./crudpage";
import "./successpage.css";

function Success(){

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    
    const [information, setInformation] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        getInfoData();
    },[]);

    async function getInfoData(){
        try {
            const { data, error } = await supabases
                                        .from("information")
                                        .select("*")
                                        .limit(10);
            
            if(error) throw error;
            if(data != null)
                setInformation(data);
                console.log(data);
        } catch (error) {
            alert(error.message);
        }
    }

    async function addInfo(){
        try {
            const {data, error} = await supabases
                                    .from("information")
                                    .insert({
                                        name: name,
                                        city: city,
                                        phone: phone
                                    })
                                    .single()
            console.log("Data Inserted!!");
            if(error) throw error
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    }
    

    async function signOut(){
        const { error } = await supabases.auth.signOut();
        console.log(error);
        console.log("Signed Out");
        navigate("/");
    }

    return(
        <>
        <div className="form_container">
            <div>
                <h2> Add / Update Form </h2>
                <button onClick={() => signOut()}> Log Out </button>
            </div>

                    <div className="box">
                        <input type='text' placeholder='Full name' autoComplete="Off"
                            value={name} onChange={(event) => setName(event.target.value)}></input>
                    </div>
                    <div className="box">
                        <input type='text' placeholder='City' autoComplete="Off"
                            value={city} onChange={(event) => setCity(event.target.value)}></input>
                    </div>
                    <div className="box">
                        <input type='text' placeholder='Phone number' autoComplete="Off"
                            value={phone} onChange={(event) => setPhone(event.target.value)}></input>
                    </div>

            <button onClick={() => addInfo()}> Add </button>
        
        </div>
        <div className="database">
            <h2> CRUD database </h2>
            <div className="container">
                {
                    information.map((data) => {
                        return(
                            <>
                                
                                <div className="box">
                                    <h3> Fullname : {data.name} </h3>
                                    <h3> City : {data.city} </h3>
                                    <h3> Phone Number : {data.phone} </h3>
                                    <Crud data={data} />
                                    
                                </div>
                                
                            </>
                        )
                    })
                }
                
            </div>
        </div>
        </>
    );

}

export default Success;