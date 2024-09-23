# 배열 랜덤 섞기

---

## 피셔-예이츠 알고리즘

```jsx
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 요소 교환 (구조 분해 할당)
  }
  return array;
}

const arr = [1, 2, 3, 4, 5]; 
console.log(shuffleArray(arr)); // 배열이 랜덤하게 섞인 결과 출력
```

### Math.random()

- 0이상 1미만의 난수이다.
- Math.random() * 4를 하면 0이상 4미만의 난수를 얻을 수 있다. 이것을 Math.floor로 감사면 0이상 4미만의 정수를 얻을 수 있다.

### 구조 분해 할당

- 배열로부터 값을 추출해서 다시 새로운 배열로 재조립한다.
- 예시

```jsx
let a = 5;
let b = 10;

[a, b] = [b, a] //a와 b의 값을 서로 교환
console.log(a); //10
console.logA(b); //5
```

---

## 리액트 적용

```jsx
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
    const [shuffProfile, setShuffProfile] = useState([]);
    function shuffled(array){
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        
        return array 
    } 
    useEffect(()=>{
        setShuffProfile(shuffled(profile));
    },[])
    
    return(
        <section className='wrap_profile'>
        (...)
                <ul>
                    {shuffProfile.map((it)=>(
                        <li key={it.id}>
                        (...)
                        </li>
                    ))} 
                </ul> 
          (...)
        </section>
    )
}
```

# css를 이용한 말줄임 처리 

---

```jsx
display:-webkit-box; //box로 지정
-webkit-line-clamp : 1 //1줄까지 보이게하기
-webkit-box-orient:vertical // 박스의 흐름방향(수직)
```
- 추가로 overflow:hidden을 추가하여 1줄 아래로는 숨김처리를 할 수 있다. 
- display:box 속성은 모바일 반응형으로도 적용할 수 있다. 