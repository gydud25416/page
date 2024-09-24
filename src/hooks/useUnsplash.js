import axios from "axios";
import { useEffect, useState } from "react";

/**
 * axios 라이브러리를 이용한
 * 이미지 REST API 호출
 */
export default function useUnplash(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const bg_img = localStorage.getItem('bgImg');
        axios.get(url)
            .then(res => {
                if (!bg_img) { // 로컬스토리지에 이미지가 없을때만 가져오기
                    setData(res.data.urls.regular);
                    localStorage.setItem('bgImg', res.data.urls.regular);
                }
            })
            .catch(error => {
                /**
                 * HTTP 상태코드가 클라이언트 에러일 때 
                 * 로컬스토리지 이미지 url 삭제
                 */
                if (error.status > 400 && error.status < 500) {
                    localStorage.removeItem('bgImg');
                }
                console.error(error);
            })
    }, [url])
    return data;
}