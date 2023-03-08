import React, { useState } from "react";
import Card from "./Card";
import styles from "./Form.module.css";

const Form = () => {

    const [user, setUser] = useState ("");
    const [pet, setPet] = useState ("");
    const [message, setMessage] = useState(false);
    const [isErrorName, setIsErrorName] = useState(false);

    const onChangeUser = (e) => {
        setUser(e.target.value)
    }
    const onChangePet = (e) => {
        setPet(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault();      
        const nameValidate = user.trim();

        if(nameValidate.length >=3  && pet.length >= 6) {
            setIsErrorName(false);
            setMessage(true)
        }
        else{
            setMessage(false)            
            setIsErrorName(true);
        }
    }

    return(    
        <>
            <h1>Registro de Usuario y Mascota</h1>
            <form className={styles.form} onSubmit={onSubmitForm}>
                <div>
                <input className={styles.input} type="text" placeholder="Ingrese su nombre" onChange={onChangeUser} value={user}/>
                </div>
                {isErrorName && <p>Por favor chequea que la información sea correcta</p>}
                <div>
                <input className={styles.input} type="text" placeholder="Ingrese nombre de mascota" onChange={onChangePet} value={pet}/>
                </div>
                <button>Enviar</button>            
            </form>

        {message ? <Card userName = {user} petName = {pet}/> : null }
        </>
    )
}

export default Form
