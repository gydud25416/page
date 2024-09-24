import { country } from "../data";
import CountryItem from "./CountryItem";
import './CountryList.css'
import { useEffect, useMemo, useState } from "react";

// 카드 List+카테고리 섹션 컴포넌트 
export default function CountryList() {
    const [filterCountry, setFilterCountry] = useState('all'); // 대륙 카테고리
    const [filterTotal, setFilterTotal] = useState(1000); //조회수 카테고리
    const [countryData, setCountryData] = useState(country); //카드 데이터 

    //대륙 카테고리 state 변경
    function onCountry(e) {
        setFilterCountry(e);
    }

    //조회수 카테고리 state 변경
    function onTotal(e) {
        setFilterTotal(e);
    }

    /**
     * state 변화 시 전체 카드 데이터 불러오기
     * 대륙 카테고리 -> 조회수 순으로 필터링
     * 필터링 결과 메모이제이션
     */
    const filteredCountryData = useMemo(() => {
        let result = country; // 전체 카드 데이터 
        if (filterCountry !== 'all') { // 대륙 필터링
            result = result.filter((it) => it.country === filterCountry);
        }
        return result.filter((it) => it.total >= filterTotal); //조회수 필터링
    }, [filterCountry, filterTotal])
    
    //카테고리 필터링 결과 호출
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