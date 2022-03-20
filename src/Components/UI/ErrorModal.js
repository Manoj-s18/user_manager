import style from './ErrorModal.module.css'


const ErrorModal = props =>{

    
    return(
        <div className={style.backdrop} onClick={props.onError} >
        <div className={style.modal} >
            <header className={style.header}>
                <h2>{props.header}</h2>
            </header>
            <div className={style.content}>
                <p>{props.description}</p>
            </div>
            <footer className={style.actions}>
                <button className={style.button} >Okay</button>
            </footer>
        </div>
        </div>
    )
}
export default ErrorModal;