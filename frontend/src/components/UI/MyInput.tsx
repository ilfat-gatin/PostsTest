import styles from "../../styles/UI.module.css"

interface IInput {
    value: string
    placeholder: string
    change(value:string): void 
}

export const MyInput:React.FC<IInput> = ({value, change, placeholder}) => {
    return <input className={styles.input} type="text" onChange={(e) => change(e.target.value)} value={value} placeholder={placeholder}/>
}