import CountryItem from "./CountryItem";
import './CountryList.css'

export default function CountryList(){

    return(
        <section className="wrap_country">
            <div className="title">
                <h1>Duis tincidunt ut ligula vitae mollis.</h1>
            </div>
            <div className="country_sec01">
                <ul className="filter_country">
                    <li>
                        <button>All</button>
                    </li>
                    <li>
                        <button>Asia</button>
                    </li>
                    <li>
                        <button>Europe</button>
                    </li>
                    <li>
                        <button>America</button>
                    </li>
                    <li>
                        <button>Oceania</button>
                    </li>
                </ul>
                <ul className="filter_total">
                    <li>
                        <button>1000</button>
                    </li> 
                    <li>
                        <button>1300</button>
                    </li> 
                    <li>
                        <button>1700</button>
                    </li> 
                    <li>
                        <button>2000</button>
                    </li>
                </ul>
            </div>
            <CountryItem/>
        </section>
    )
} 