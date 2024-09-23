import { country } from "../data";
import CountryItem from "./CountryItem";
import './CountryList.css'
import { useEffect, useMemo, useState } from "react";


export default function CountryList() {
    const [filterCountry, setFilterCountry] = useState('all');
    const [filterTotal, setFilterTotal] = useState(1000);
    const [countryData, setCountryData] = useState(country);

    function onCountry(e) {
        setFilterCountry(e);
    }

    function onTotal(e) {
        setFilterTotal(e);
    }

    // 국가, 토탈수 필터링 메모이제이션
    const filteredCountryData = useMemo(() => {
        let result = country;
        if (filterCountry !== 'all') { // 국가 필터링
            result = result.filter((it) => it.country === filterCountry);
        }
        // total 필터링
        return result.filter((it) => it.total >= filterTotal);
    }, [filterCountry, filterTotal])

    useEffect(() => {
        setCountryData(filteredCountryData);
    }, [filteredCountryData])

    return (
        <section className="wrap_country">
            <div className="title">
                <h1>Duis tincidunt ut ligula vitae mollis.</h1>
            </div>
            <div className="country_sec01">
                <ul className="filter_country">
                    <li>
                        <button onClick={() => onCountry('all')} className={filterCountry === 'all' ? 'on' : ''}>All</button>
                    </li>
                    <li>
                        <button onClick={() => onCountry('asia')} className={filterCountry === 'asia' ? 'on' : ''} >Asia</button>
                    </li>
                    <li>
                        <button onClick={() => onCountry('europe')} className={filterCountry === 'europe' ? 'on' : ''}>Europe</button>
                    </li>
                    <li>
                        <button onClick={() => onCountry('america')} className={filterCountry === 'america' ? 'on' : ''}>America</button>
                    </li>
                    <li>
                        <button onClick={() => onCountry('oceania')} className={filterCountry === 'oceania' ? 'on' : ''}>Oceania</button>
                    </li>
                </ul>
                <ul className="filter_total">
                    <li>
                        <button onClick={() => onTotal(1000)} className={filterTotal >= 1000 ? 'on' : ''}>1000</button>
                    </li>
                    <li className={filterTotal >= 1300 ? 'on' : ''}>
                        <button onClick={() => onTotal(1300)} className={filterTotal >= 1300 ? 'on' : ''}>1300</button>
                    </li>
                    <li className={filterTotal >= 1700 ? 'on' : ''}>
                        <button onClick={() => onTotal(1700)} className={filterTotal >= 1700 ? 'on' : ''}>1700</button>
                    </li>
                    <li className={filterTotal >= 2000 ? 'on' : ''}>
                        <button onClick={() => onTotal(2000)} className={filterTotal >= 2000 ? 'on' : ''}>2000</button>
                    </li>
                </ul>
            </div>
            <CountryItem countryData={countryData} />
        </section>
    )
} 