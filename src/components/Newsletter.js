import submit from '../assets/paper-plane 1.png'
import './Newsletter.css'

export default function Newsletter(){
 
    return(
        <section className="wrap_newsletter" style={{backgroundImage:`url(${submit})`}}>
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
                    <input type="email"  placeholder="Enter your email"/>
                    <button><img src={submit} alt="전송" /></button>
                    <p className='invalid ff-tit'>Please enter a valid email!</p>
                </div>
                
            </div>
        </section>
    )
}