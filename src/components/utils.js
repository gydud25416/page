
import profile1 from '../assets/1.png'
import profile2 from '../assets/2.png'
import profile3 from '../assets/3.png'
import country1 from '../assets/image.jpg'
import country2 from '../assets/image2.jpg'
import country3 from '../assets/image3.jpg'
import country4 from '../assets/image4.jpg'

// 프로필 이미지 불러오기
export const getProfileImg = (profileId) => {
    const targetImgId = String(profileId)
    switch (targetImgId) {
        case "1":
            return profile1;
        case "2":
            return profile2;
        case "3":
            return profile3;
        default:
            return null;
    }
}

// 국가 List 이미지 불러오기
export const getCountryImg = (countryId) => {
    const targetImgId = String(countryId)
    switch (targetImgId) {
        case "1":
            return country1;
        case "2":
            return country2;
        case "3":
            return country3;
        case "4":
            return country4;
        default:
            return null;
    }
}