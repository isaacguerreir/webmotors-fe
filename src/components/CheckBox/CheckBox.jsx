import React from 'react'
import styles from './CheckBox.css'

const CheckBox = (props) => {
    console.log('styles', styles)
    return (
        <div className={styles.box}>
            <input className={styles.checkbox} type="checkbox"/>
            <label>{props.label}</ label>
        </div>
    )
}

export default CheckBox