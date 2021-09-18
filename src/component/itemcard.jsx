export const ItemCard = ({
  topBadge,eventName,description,importance,image,
}) => {
  return (
    <div
      className="card bg-dark text-white rounded-3 shadow-lg border-0 m-2"
      style={{
        cursor: "pointer",
        height: "300px",
        width: "280px",
        backgroundImage: `linear-gradient(0deg, #000, #0000), url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card-img-overlay d-flex flex-column justify-content-between">
        <div>
          <span className="badge rounded-pill bg-dark text-light p-2 px-3 bg-opacity-75">
            {topBadge}
          </span>
        </div>
        <div>
          <h4>{eventName}</h4>
          {description && (
            <small>
              {description}
              <br />
            </small>
          )}
          <span className="mt-2 badge rounded-pill bg-dark text-light p-2 px-3 bg-opacity-75 border-white border border-1">
            <li>{importance}</li>
          </span>
        </div>
      </div>
    </div>
  );
};