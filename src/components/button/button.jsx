import style from './button.module.css'

export default function Button({ label, color, bgcolor }) {
    return (
        <button className={style.button} style={{backgroundColor: `${bgcolor}`}}>
            <p className={style.buttonLabel} style={{color: `${color}`}}>{label}</p>
        </button>
    )
}