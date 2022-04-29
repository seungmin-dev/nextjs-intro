import Seo from "../components/Seo";

export default function Home({results}) {
   return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div> ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .Movie {
            cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 다른 함수 명들은 내 마음대로 해도 되지만 getServerSideProps 는 이 이름 그대로 해야함!!
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/movies`);
    const {results} = await res.json();
    return {
      props: {
        results,
      },
    };
  }
// 위에 작성하는 코드는 server에서 작동함!(X client X)
// API KEY를 여기에 작성해도 됨
// server에서 렌더링을 하면 소스코드에 렌더된 results를 확인할 수 있음!(HTML)
// Loading 화면을 따로 안넣어도 되지만 렌더되기 전까지는 빈 화면
// js가 비활성화 되어있더라도 작동할 것!(서버에서 작동하는 것이기 때문에)

// 같은 번호로 포트가 열려있으면 getServerSideProps가 제대로 작동하지 않음!
