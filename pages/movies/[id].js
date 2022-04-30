import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    return (
        <div>
            <h4>{router.query.title || "Loading..."}</h4>
        </div>
    );
}

// 변수명이 포함된 경로로 이동하고 싶다면 그 변수 명을 파일명에 [] 안에 넣어서 만듦
