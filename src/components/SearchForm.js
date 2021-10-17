import style from './SearchForm.module.css'
import ResultCard from './ResultCard';
import { useState } from 'react'
import axios from 'axios';

function SearchForm() {
    const [toggleResult, setToggleResult] = useState(false)
    const [input, setInput] = useState({})
    const [result, setResult] = useState([])
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('https://api.openweathermap.org/data/2.5/weather?appid=75193fdd545518c12fe493bfebd38984&units=Metric&q=' + input['cityName'])
        .then(response => {
            setResult(response.data)
            setToggleResult(true)
            setError("")
        })
        .catch(error => {
            // alert(error.response)
            setError(error.response.data.message)
            setToggleResult(false)
        })
    }
    const handleChange = (e) => {
        setInput( input => (
            {
                ...input,
                [e.target.name] : e.target.value
            }
        ))
    }
    return (
        <div>
            <div className={style.formContainer}>
            <form className={style.card} onSubmit={handleSubmit}>
                <h2>Open Weather</h2>
                <p className={style.errorMessage}>{error}</p>
                <input type="text" name='cityName' placeholder="City name" autoComplete="off" required onChange={handleChange}/>
                {/* <input type="text" name="stateCode" placeholder="State code" onChange={handleChange}/>
                <input type="text" name="countryCode" placeholder="Country code" onChange={handleChange}/> */}
                <input type="submit" value="Search"/>
            </form>
        </div>
            {/* {toggleResult ? result.map( (res => <ResultCard data={res} />) ) : null} */}
            {toggleResult ?  <ResultCard data={result} /> : null}
        </div>
    )
}

export default SearchForm;