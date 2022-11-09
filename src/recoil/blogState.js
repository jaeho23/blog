import {atom} from "recoil"

export const blogRecoilState = atom({
    key: "blogState",
    default:{
        modal: [true, true, true],
        title: ["남자코트 추천", "강남 우동맛집", "파이썬독학"],
    },
});