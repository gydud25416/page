import axios from "axios";
import { useEffect, useState } from "react";

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
                if (error.response.status > 400 && error.response.status < 500) {
                    localStorage.removeItem('bgImg');
                }
                console.error(error);
            })
    }, [url])
    return data
}