import React from 'react'
import styles from './Breadcrumb.module.css'
import { Link } from 'react-router-dom'

export default function Breadcrumb({props}) {
    let path = '';
    props.path.map((route) => {
        if(route !== 'Home') path += ' / ';
        path += route;
        return path;
    });
    
    return (
        <div className={styles.container}style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${props.img}) center`,
            backgroundSize: 'cover'
            }}
        >
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.path}>
                <Link to='/' className={styles.path}>Home</Link>
                {
                    props.path.map((p) => <Link to={p.url} className={`${styles.path} ${styles.activePath}`}>{p.name}</Link>)
                }
            </div>
        </div>
    )
}
