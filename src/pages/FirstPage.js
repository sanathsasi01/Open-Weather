import style from './FirstPage.module.css'
import SearchForm from '../components/SearchForm'

function FirstPage() {
    return (
        <div className={style.firstPageContainer}>
            <SearchForm />
        </div>
    )
}

export default FirstPage;