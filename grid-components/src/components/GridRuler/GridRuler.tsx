import React from 'react'
import styles from './GridRuler.module.scss'
import cn from 'classnames'

type Spacing='sm' | 'md' | 'lg';

interface Props{
    spacing?:Spacing;
}

function GridRuler({spacing}:Props) {

    const classNames=cn(styles.GridRuler,{
        [styles[`GridRuler_spacing_${spacing}`]]:spacing,
    });

    return (
        <div className={classNames}>
            {Array(12).fill(0).map((_,i)=><div className={styles.GridRuler_item}
            key={i+1} />)}
        </div>
    )
}

export default GridRuler
