
import './CountryItem.css'



export default function CountryItem({countryData}){

    console.log(countryData)
    return(
        <>
        
            {countryData.length === 0 ? (
                <ul className="wrap_item">
                    <li>
                        There are a total of <b style={{color:'#0082cf'}}>0</b> posts.
                    </li>
                </ul>
            ):(
                <ul className="wrap_item">
                {countryData.map((it)=>(
                    <li key={it.id}>
                        <ul>
                            <li>{it.name}</li>
                            <li>{it.total}</li>
                        </ul>
                        <div style={{backgroundImage:`url(${it.img})`, backgroundSize:'cover'}}></div>
                        <p>{it.description}</p>
                    </li>
                ))}
                </ul>
            )}
            
        
        </>
    )
}