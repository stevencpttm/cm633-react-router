import { useLoaderData, Link, NavLink } from "react-router-dom";

const NewsList = () => {
  const { news } = useLoaderData();

  return (
    <ul className="list-disc ml-12 flex flex-col gap-y-1 text-xl">
      {news.map((news) => {
        return (
          <li key={news.id}>
            <NavLink
              to={`/news/${news.id}`}
              className={({ isActive, isPending }) =>
                `${isPending ? "bg-yellow-200" : ""}`
              }
            >
              {news.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
