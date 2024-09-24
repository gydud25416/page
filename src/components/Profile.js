import { useEffect } from 'react'
import './Profile.css'
import { useState } from 'react'
import { profile } from '../data';
import { Link } from 'react-router-dom';

// 랜덤 프로필 섹션 컴포넌트
export default function Profile() {
    const [shuffProfile, setShuffProfile] = useState([]); //프로필 랜덤 배열

    /**
     * 피셔-예이츠 알고리즘
     * for문으로 셔플 후 구조분해할당
     */
    function shuffled(array) { //배열 섞기 
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; //요소 교환
        }
        return array;
    }

    //배열 랜덤으로 섞인 결과
    useEffect(() => {
        setShuffProfile(shuffled(profile)); 
    }, [])

    return (
        <section className='wrap_profile'>
            <div className="title">
                <h1>Snap photos and share like <br />never before</h1>
            </div>
            <div className='profile'>
                <ul>
                    {shuffProfile.map((it) => (
                        <li key={it.id}>
                            <img src={it.img} alt={it.title} />
                            <p className='h'>{it.title}</p>
                            <p className='t'>{it.description}</p>
                            <Link to={`/`} className='ff-tit' rel="noreferrer" >LEARN MORE</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}