import styles from "../styles/Comment.module.css"

interface IComment {
    user: string
    text: string
}

export const Comment:React.FC<IComment> = ({user, text}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>            
                <div className={styles.photo}>
                    <svg version="1.1" id="user" x="0px" y="0px"
                        viewBox="0 0 785.8159 1010" enableBackground="new 0 0 785.8159 1010" >
                    <g id="user-user">
                        <path fill="#323B5A" d="M392.9692,0c135.251,0,244.8565,109.5234,244.8565,244.6914c0,135.312-109.6055,244.8145-244.8565,244.8145
                            c-135.1269,0-244.7734-109.5025-244.7734-244.8145C148.1958,109.5234,257.8423,0,392.9692,0z"/>
                        <path fill="#323B5A" d="M785.8159,1010h-0.5762H0V876.8457c0-173.7793,109.3999-321.1318,261.9521-376.0586l131.0171,174.6016
                            l130.9756-174.6016c152.5938,54.9268,261.8711,202.2793,261.8711,376.0586V1010z"/>
                    </g>
                    </svg>
                </div>
                <h4>{user}</h4>
            </div>
            <div>                
                <p className={styles.text}>{text}</p>    
            </div>            
        </div>
    )
}