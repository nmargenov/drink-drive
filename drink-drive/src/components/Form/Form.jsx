import { useEffect, useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import styles from "./Form.module.css";
import { Spinner } from "../Spinner/Spinner";

export const Form = () =>{

    const formRef = useRef();

    const [successMsg, setSuccessMsg] = useState('');

    const [initialValues,setInitialValues] = useState({
        name: "",
        tel: "",
        location: "",
        description: "",
        time: ""
    })
    
    const { values, setValues, onSubmitHandler, onInputChange, errorMsg, setErrorMsg, isLoading, setIsLoading } = useForm(initialValues);
    
    const regEx = /^(?:\+359\d{9}|0\d{9})$/;

    function onSubmit(e) {
        onSubmitHandler(e);

        if(values.name.length===0 || values.tel.length ===0 || values.location.length === 0){
            setSuccessMsg('');
            setErrorMsg('Не сте въвели всички задължителни полета!');
            return;
        }
        if(!regEx.test(values.tel)){
            setSuccessMsg('');
            setErrorMsg('Невалиден телефонен номер!');
            return;
        }

        setErrorMsg(false);

        setIsLoading(true);
        emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, formRef.current, {
          publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
        }).then(() => {
            setIsLoading(false);
            setSuccessMsg('Заявката е изпратена успешно!');
            setValues(initialValues);
            setErrorMsg('');
          },
          (error) => {
            setIsLoading(false);
            setSuccessMsg('');
            setErrorMsg("Грешка при изпращането на имейл! Моля опитайте пак!")
          });
    }

    return(
        <div id="form" className={styles['form-div']}>
            <form ref={formRef} onSubmit={onSubmit}>
                <h2>Поръчай онлайн</h2>
                <div className={styles['inputs']}>
                    <input  disabled={isLoading} type="text" onChange={onInputChange} name="name" placeholder="Вашето име*" value={values.name} />
                    <input  disabled={isLoading} type="text" onChange={onInputChange} name="tel" placeholder="Вашият телефон*" value={values.tel} />
                    <input  disabled={isLoading} type="text" onChange={onInputChange} name="location" placeholder="Къде се намирате*" value={values.location} />
                    <textarea disabled={isLoading} type="text" onChange={onInputChange} name="description" placeholder="Допълнителна информация" value={values.description}></textarea>
                    <div className={styles['row']}>
                        {!isLoading&& <>
                            <button disabled={isLoading} className={styles['submit-button']}>Поръчай</button>
                            {successMsg &&<p className={styles['success']}>{successMsg}</p>}
                            {errorMsg &&<p className={styles['error']}>{errorMsg}</p>}
                        </>}
                        {isLoading && <Spinner/>}
                    </div>
                </div>
            </form>
        </div>
    )
}