import style from './ResultCard.module.css'

function ResultCard(props) {
    return (
        <div className={style.formContainer}>
            <div className={style.card}>
                <div>   
                    <p className={style.degree}> {props.data.main.temp} <span>&#8451;</span> </p>
                    <div className={style.innerContainer}>
                        <p>Humidity : <span>{props.data.main.humidity} %</span> </p> {/* style={{border:"1px solid red"}} */}
                        <p>Pressure :  <span>{props.data.main.pressure} hPa</span></p>
                    </div>
                </div>
                {/* <div>
                    <span>Temperature : <span>16</span> </span>
                </div> */}
            </div>
        </div>
    )
}


export default ResultCard;