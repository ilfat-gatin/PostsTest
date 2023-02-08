import styles from "../../styles/UI.module.css"

interface IButton {
    text: string
    click():void 
}

export const MyButton:React.FC<IButton> = ({text, click}) => {
    return <button className={styles.button} onClick={click}>{text}</button>
}