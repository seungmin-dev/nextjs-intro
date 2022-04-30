import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    return "detail";
}

// 변수명이 포함된 경로로 이동하고 싶다면 그 변수 명을 파일명에 [] 안에 넣어서 만듦
