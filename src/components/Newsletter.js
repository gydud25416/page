import { useEffect, useRef, useState } from 'react'
import submit from '../assets/paper-plane 1.png'
import './Newsletter.css'
import useUnplash from '../hooks/useUnplash'

export default function Newsletter(){
    const [bgImg, setBgImg] = useState();
    const [email, setEmail]= useState('');
    const [emailTest, setEmailTest] = useState(true);
    const [emailBorder, setEmailBorder] = useState('');
    const emailRef = useRef(null);
    const item = useUnplash('https://api.unsplash.com/photos/random?client_id=-skz5oPhTXsEz7Xt838FwxE-ABdPJlYaSk3PbE4aVko');
    const bg_img = localStorage.getItem('bgImg');

    useEffect(()=>{ // 로컬스토리지에서 이미지 url 가져오기
             if(bg_img){
                setBgImg(bg_img); 
            }
    },[bg_img])  

    function handleOnEmailChange(){
        setEmail(emailRef.current.value);
    }

    useEffect(()=>{
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 아이디@사이트.도메인

        if(email.length > 0){ // 1글자 이상 입력
            if(!emailTest.test(email)){ //이메일 유효성 검사 실패
                setEmailTest(false);
                setEmailBorder('invalid');
            }else{// 유효성 검사 성공
                setEmailTest(true); 
                setEmailBorder('valid')
            }
        }else{ //입력 글자 없음
            setEmailTest(true);
            setEmailBorder('');
        }
    },[email])

    function onSubmit(){
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 아이디@사이트.도메인
        if(email.length < 1 ){// 입력 글자 없음 
            alert("이메일을 입력해주세요");
            emailRef.current.focus(); //입력창 포커스 
            return false;
        }else{ //한글자 이상 입력
            if(!emailTest.test(email)){ //이메일 유효성 검사 실패
                return false;
            }else{// 유효성 검사 성공
                if(window.confirm("뉴스레터를 구독하시겠습니까?")){
                    alert("구독되었습니다. \n뉴스레터는 메일을 통해 확인이 가능합니다.");
                    setEmail('');
                } 
            }
        }
    }
    return(
        <section className="wrap_newsletter" style={{backgroundImage:`url(${bgImg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
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
                    <input type="email" maxLength={35} className={`${emailBorder}`} value={email} ref={emailRef} onChange={handleOnEmailChange} placeholder="Enter your email"/>
                    <button onClick={onSubmit} className={`${emailTest === true? 'on':''}`}><img src={submit} alt="전송" /></button>
                    <p className={`invalid  ff-tit ${emailTest === true? '':'on'}`}>Please enter a valid email!</p>
                </div>
                
            </div>
        </section>
    )
}