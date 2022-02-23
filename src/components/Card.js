import { Link } from "react-router-dom";

const Card = ({ page, results }) => {
 let display;

 if (results) {
  display = results.map((x) => {
  let { id, image, name, status } = x;

    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`${page}${id}`}
        key={id}
        className="group"
      >
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm ">{name}</h3>
          <p className="mt-1 text-lg font-medium">{status}</p>
        </Link>
    );
    });
   }
   else {
     display = "No Characters Found :/";
   }

    return <>{display}</>;
  }

export default Card;
