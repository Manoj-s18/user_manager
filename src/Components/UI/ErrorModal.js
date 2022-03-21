import style from './ErrorModal.module.css'
import ReactDom from 'react-dom'
import { Fragment } from 'react'

const Backdrop = props =>{
    return(
        <div className={style.backdrop} onClick={props.onError} />
    )
}

const Modaloverlay = props =>{
    return(
        <div className={style.modal} onClick={props.onError}>
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
    )
}

const ErrorModal = props =>{

    
    return(
        <Fragment>
        {ReactDom.createPortal(
            <Backdrop onError={props.onError}/>,
            document.getElementById('backdrop-root'))
        }
        {ReactDom.createPortal(
            <Modaloverlay header ={props.header} description={props.description} onError={props.onError}/>,
            document.getElementById('modaloverlay-root'))
        }

        </Fragment>
    )
}
export default ErrorModal;