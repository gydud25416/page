import './CountryItem.css'
// 카드 List 內 아이템 컴포넌트 
export default function CountryItem({ countryData }) {

    return (
        <>
            {countryData.length === 0 ? ( // 게시물이 없을 때
                <ul className="wrap_item">
                    <li>
                        There are a total of <b style={{ color: '#0082cf' }}>0</b> posts.
                    </li>
                </ul>
            ) : (// 게시물이 있을 때
                <ul className="wrap_item">
                    {countryData.map((it) => (
                        <li key={it.id}>
                            <ul>
                                <li>{it.name}</li>
                                <li>{it.total}</li>
                            </ul>
                            <div style={{ backgroundImage: `url(${it.img})`, backgroundSize: 'cover' }}></div>
                            <p>{it.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}