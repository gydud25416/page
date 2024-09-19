import profile1 from '../assets/1.png'
import profile2 from '../assets/2.png'
import profile3 from '../assets/3.png'
import './Profile.css'

const profile=[
    {
        id:1,
        img:profile1,
        title:'Nemo enim ipsam',
        description:'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.'
    },
    {
        id:2,
        img:profile2,
        title:'Sed ut perspiciatis',
        description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
    },
    {
        id:3,
        img:profile3,
        title:'Lorem ipsum dolor',
        description:'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
    }
]

export default function Profile(){

    return(
        <section className='wrap_profile'>
            <div className="title">
                <h1>Snap photos and share like<br/>never before</h1>
            </div>
            <div className='profile'>
                <ul>
                    {profile.map((it)=>(
                        <li key={it.id}>
                        <img src={it.img} alt={it.title} />
                        <p className='h'>{it.title}</p>
                        <p className='t'>{it.description}</p>
                        <a className='ff-tit' href='https://www.naver.com' rel="noreferrer" title='새창열림' target='_blank'>LEARN MORE</a>
                    </li>
                    ))} 
                </ul> 
            </div>
        </section>
    )
}