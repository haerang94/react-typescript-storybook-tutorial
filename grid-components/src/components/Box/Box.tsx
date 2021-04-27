import React,{ReactNode} from 'react'
import styles from './Box.module.scss';

interface Props{
    children:ReactNode;
}

function Box({children}:Props) {
    return (
        <div className={styles.Box}>
            {children}
        </div>
    )
}


// const Box:FunctionComponent<{children:ReactNode}>=({children})=> {
//     return (
//         <div className={styles.Box}>
//             {children}
//         </div>
//     )
// }

export default Box
