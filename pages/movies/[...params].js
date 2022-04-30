import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  // const [title, id] = router.query.params;
  // 위의 코드로 실행한다면 유저가 incognito 모드에서 url로 들어왔을 때 에러 발생
  // 이유는 이 페이지가 백엔드(server)에서 pre-render 되기 때문
  // server에서는 router.query.params가 아직 존재하지 않음

  // 컴포넌트 내에서 Router를 사용하면 router는 프론트에서만 실행이 됨

  // const [title, id] = router.query.params || [];
  // 위의 에러는 바로 위의 코드처럼 끝에 || [] 를 붙여서 해결

  // => client-side-rendering만 해주는 것
  // 소스코드에서는 화면에 보이고 있는 title을 찾을 수 없음!

  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// server-side-rendering
// 파라미터를 조금 더 빠르게 가져오기 위해서 ssr
export function getServerSideProps({ params: { params } }) {
  // getServerSideProps() 안에는 server-side에 있는 params가 있음
  // console.log(params)를 해보면 확인 가능
  return {
    props: {
      params,
    },
  };
}

// 파일명을 [...variables] 로 바꾸면 모든 url 변수를 catch 할 수 있음
