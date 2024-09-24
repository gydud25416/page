import { useEffect, useMemo, useRef, useState } from 'react'
import submit from '../assets/paper-plane 1.png'
import './Newsletter.css'
import useUnsplash from '../hooks/useUnsplash'

// 뉴스레터 구독 섹션 컴포넌트
export default function Newsletter() {
    const [bgImg, setBgImg] = useState(); // 배경 이미지 URL
    const [email, setEmail] = useState(''); // 입력한 이메일 state
    const [emailTest, setEmailTest] = useState(true); // 이메일 유효성 검사 결과
    const [emailBorder, setEmailBorder] = useState(''); // 입력 테두리 스타일
    const emailRef = useRef(null); // 이메일 입력창(input)
    const bg_img = localStorage.getItem('bgImg'); // 로컬스토리지 이미지 url
    useUnsplash('https://api.unsplash.com/photos/random?client_id=-skz5oPhTXsEz7Xt838FwxE-ABdPJlYaSk3PbE4aVko'); // API 훅에 URL 전달

    /**
     * 로컬스토리지에 URL이 있다면 || 바뀌면
     * 배경 이미지 url state 변경
     */
    useEffect(() => { 
        if (bg_img) {
            setBgImg(bg_img);
        }
    }, [bg_img])

    /**
     * onChage(입력)할 때 input(입력창)에 문구 업데이트
     */
    function handleOnEmailChange() {
        setEmail(emailRef.current.value);
    }

    // 이메일 유효성 검사 결과 메모이제이션
    const isValidEmail = useMemo(() => {
        // 이메일 유효성 검사 정규표현식
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        return emailRegex.test(email);
    }, [email])

    /**
     * onChange(입력)할 때마다 유효성 검사 실시 
     * input 하단 invalid 텍스트(setEmailTest) && 테두리(setEmailBorder)로 결과 노출
     */
    useEffect(() => {
        if (email.length > 0) { // 1글자 이상 입력
            if (!isValidEmail) { //이메일 유효성 검사 실패
                setEmailTest(false);
                setEmailBorder('invalid');
            } else {// 유효성 검사 성공
                setEmailTest(true);
                setEmailBorder('valid');
            }
        } else { //입력 글자 없음
            setEmailTest(true);
            setEmailBorder('');
        }
    }, [email, isValidEmail])

    /**
     * 이메일 폼 전송
     */
    function onSubmit() {
        if (email.length < 1) {// 입력 글자 없음 
            alert("이메일을 입력해주세요");
            emailRef.current.focus(); //입력창 포커스 
            return false;
        }

        if (!isValidEmail) { //이메일 유효성 검사 실패
            return false;
        }

        //유효성 검사 성공
        if (window.confirm("뉴스레터를 구독하시겠습니까?")) {
            alert("구독되었습니다. \n뉴스레터는 메일을 통해 확인이 가능합니다.");
            setEmail(''); //이메일 입력창 초기화
        }
    };


    return (
        <section className="wrap_newsletter" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg_black'></div>
            <div className="newsletter_sec01">
                <p>Sed ut perspiciatis unde omnis</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            </div>
            <div className="newsletter_sec02">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
            </div>
            <div className="newsletter_sec03">
                <p className='ff-tit'>Subscribe to our newsletter</p>
                <div>
                    <input type="email" maxLength={35} className={`${emailBorder}`} value={email} ref={emailRef} onChange={handleOnEmailChange} placeholder="Enter your email" />
                    <button onClick={onSubmit} className={`${emailTest === true ? 'on' : ''}`}><img src={submit} alt="전송" /></button>
                    <p className={`invalid  ff-tit ${emailTest === true ? '' : 'on'}`}>Please enter a valid email!</p>
                </div>

            </div>
        </section>
    )
}