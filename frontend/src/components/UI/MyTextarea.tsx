import styles from '../../styles/UI.module.css'

interface ITextarea {
    value: string
    placeholder: string
    change(value:string): void 
}

export const MyTextarea:React.FC<ITextarea> = ({value, change, placeholder}) => {
    return <textarea className={styles.textarea} onChange={(e) => change(e.target.value)} value={value} placeholder={placeholder}/>
}