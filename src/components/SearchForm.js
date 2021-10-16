import style from './SearchForm.module.css'

function SearchForm() {
    return (
        <div>
            <div className={style.formContainer}>
            <form className={style.card}>
                <h2>Open Weather</h2>
                <input type="text" placeholder="City name"/>
                <input type="text" placeholder="State code"/>
                <input type="text" placeholder="Country code"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
        <div className={style.formContainer}>
            <div className={style.card}></div>
        </div>
        </div>
    )
}

export default SearchForm;