import React from 'react'
import styles from './Grid.module.scss'
import cn from 'classnames';

type Cols=1|2|3|4|5|6|7|8|9|10|11|12;
type Spacing='sm' | 'md' | 'lg';
type JustifyContent="flex-start" | "center" | "flex-end" | "space-between" | "space-evenly";
type AlignItems="flex-start" | "center" | "flex-end" | "space-between" | "space-evenly";

interface Props{
    children:React.ReactNode;
    container?:boolean;
    item?:boolean;
    spacing?:Spacing;
    xs?:Cols;
    sm?:Cols;
    md?:Cols;
    lg?:Cols;
    justifyContent?:JustifyContent;
    alignItems?:AlignItems;
    
}  

function Grid({children,container,item,spacing,xs,sm,md,lg,justifyContent,alignItems,...props}:Props & React.HtmlHTMLAttributes<HTMLDivElement>) {
    const classNames=cn({
        [styles.Grid_container]:container,
        [styles.Grid_item]:item,
        [styles[`Grid_cols_${xs}`]]:xs,
        [styles[`Grid_cols_${sm}`]]:sm,
        [styles[`Grid_cols_${md}`]]:md,
        [styles[`Grid_cols_${lg}`]]:lg,
        [styles[`Grid_spacing_${spacing}`]]:spacing,
        [styles[`Grid_justifyContent_${justifyContent}`]]:justifyContent,
        [styles[`Grid_alignItems_${alignItems}`]]:alignItems
    });

    return (
        <div className={classNames} {...props}>
        {children}      
        </div>
    )
}

export default Grid
