import CountryItem from "./CountryItem";
import country1 from '../assets/image.jpg'
import country2 from '../assets/image2.jpg'
import country3 from '../assets/image3.jpg'
import country4 from '../assets/image4.jpg'
import './CountryList.css'
import { useEffect, useState } from "react";

export const country = [
    {
        id:1,
        country:'europe',
        name:'Italy, Pick',
        total:1173,
        img:country1,
        description:"The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry."
    },
    {
        id:2,
        country:'europe',
        name:'Spain, Sagrada Família',
        total:1882,
        img:country2,
        description:'The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.'
    },
    {
        id:3,
        country:'america',
        name:'US, Fallingwater',
        total:1935,
        img:country3,
        description:"Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store."
    },
    {
        id:4,
        country:'europe',
        name:"Russia, Saint Basil's Cathedral",
        total:1555,
        img:country4,
        description:"The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia."
    },
]

export default function CountryList(){
    const [filterCountry, setFilterCountry] = useState('all');
    const [filterTotal, setFilterTotal] = useState(1000);
    const [countryData, setCountryData] = useState(country);

    function onCountry(e){
        setFilterCountry(e);
    }

    function onTotal(e){
        setFilterTotal(e);
    }

    useEffect(()=>{ // 국가, 토탈수 필터링
        let result = country;
        if(filterCountry !== 'all'){
            result = result.filter((it)=> it.country === filterCountry);
        } 
        result = result.filter((it)=> it.total >= filterTotal);
        setCountryData(result);
    },[filterCountry, filterTotal])

    return(
        <section className="wrap_country">
            <div className="title">
                <h1>Duis tincidunt ut ligula vitae mollis.</h1>
            </div>
            <div className="country_sec01">
                <ul className="filter_country">
                    <li>
                        <button onClick={()=>onCountry('all')} className={filterCountry === 'all'? 'on':''}>All</button>
                    </li>
                    <li>
                        <button onClick={()=>onCountry('asia')} className={filterCountry === 'asia'? 'on':''} >Asia</button>
                    </li>
                    <li>
                        <button onClick={()=>onCountry('europe')} className={filterCountry === 'europe'? 'on':''}>Europe</button>
                    </li>
                    <li>
                        <button onClick={()=>onCountry('america')} className={filterCountry === 'america'? 'on':''}>America</button>
                    </li>
                    <li>
                        <button onClick={()=>onCountry('oceania')} className={filterCountry === 'oceania'? 'on':''}>Oceania</button>
                    </li>
                </ul>
                <ul className="filter_total">
                    <li>
                        <button onClick={()=>onTotal(1000)} className={filterTotal >= 1000? 'on':''}>1000</button>
                    </li> 
                    <li className={filterTotal >= 1300? 'on':''}>
                        <button onClick={()=>onTotal(1300)} className={filterTotal >= 1300? 'on':''}>1300</button>
                    </li> 
                    <li className={filterTotal >= 1700? 'on':''}>
                        <button onClick={()=>onTotal(1700)} className={filterTotal >= 1700? 'on':''}>1700</button>
                    </li> 
                    <li className={filterTotal >= 2000? 'on':''}>
                        <button onClick={()=>onTotal(2000)} className={filterTotal >= 2000? 'on':''}>2000</button>
                    </li>
                </ul>
            </div>
            <CountryItem countryData={countryData}/>
        </section>
    )
} 