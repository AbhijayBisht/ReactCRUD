import { supabases } from "./supabaseClient";
import React,{ useState } from "react";
import { Modal,Button, Form } from "react-bootstrap";


function Crud(props){

    const datas = props.data;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [name, setName] = useState(datas.name);
    const [city, setCity] = useState(datas.city);
    const [phone, setPhone] = useState(datas.phone);

    async function editInfo(){
        try {
            setIsModalVisible(true);
            console.log("Atleast Reached here");

        } catch (error) {
            alert(error.message);
        }
    }

    async function updateInfo(){ 
        try {
            const {data, error} = await supabases
                                    .from("information")
                                    .update({
                                        name: name,
                                        city: city,
                                        phone: phone
                                    })
                                    .eq("id",datas.id)
                                    .single()
                                    //await setTimeout(50000);
            if(error) throw error;
            window.location.reload();
        
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteInfo(){
        try {
            const {data, error} =  await supabases
                                        .from("information")
                                        .delete()
                                        .eq("id",datas.id)
            if(error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <div>
                <button onClick={() => editInfo()}> Update </button>
                <br/>
                <button variant="danger" onClick={() => deleteInfo()}> Delete </button>
            </div>
            <div>
                <Modal size='lg' show={isModalVisible} onHide={() => setIsModalVisible(!isModalVisible)}>
                                                    
                        <Modal.Header closeButton>
                            <Modal.Title>Information Update</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form>
                                
                                <Form.Label> Name </Form.Label>
                                <Form.Control type="text" id="name"
                                            defaultValue={datas.name}
                                            onChange={(event) => setName(event.target.value)}
                                            autoComplete="Off"
                                />
                                                    
                                <Form.Label> City </Form.Label>
                                <Form.Control type="text" id="city"
                                            defaultValue={datas.city}
                                            onChange={(event) => setCity(event.target.value)}
                                            autoComplete="Off"
                                />                  
                                                
                                <Form.Label> Phone Number </Form.Label>
                                <Form.Control type="text" id="phone"
                                            defaultValue={datas.phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                            autoComplete="Off"                                                            
                                />
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                                <Button variant="primary" onClick={() => updateInfo()}>
                                        Submit
                                </Button>
                                <Button variant="secondary" onClick={() => setIsModalVisible(!isModalVisible)}>
                                        Close
                                </Button>
                        </Modal.Footer>
                                
                </Modal>
            </div>
        </>
    );
}

export default Crud;