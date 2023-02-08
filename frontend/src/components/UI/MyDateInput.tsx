import styles from "../../styles/UI.module.css"

interface IDateinput {
    value: string
    change(value:string): void 
}

export const MyDateInput:React.FC<IDateinput> = ({value, change}) => {
    return <input type="date" value={value} onChange={(e) => change(e.target.value)} className={styles.dateInput}/>
}