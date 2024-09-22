import axios from "axios";
import { useEffect, useState } from "react";

export default function useUnplash(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const bg_img = localStorage.getItem('bgImg')
        if (bg_img === null) { // 로컬스토리지에 이미지가 없을때만 가져오기
            axios.get(url)
                .then(res => {
                    setData(res.data.urls.regular);
                    localStorage.setItem('bgImg', res.data.urls.regular)
                })
        }
    }, [url])
    return data
}