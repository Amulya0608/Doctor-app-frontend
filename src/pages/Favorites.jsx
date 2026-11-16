import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {

  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites
  );

  return (

    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Appoinments
      </h1>

      {
        favorites.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No Favorite Appoinments
            </h2>

            <p>
              Add appoinments from the
              Appoinments page.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map(appoinment => (

                <div
                  key={appoinment.id}
                  className="favorite-card"
                >

                  <img
                    src={appoinment.image}
                    alt={appoinment.name}
                  />

                  <div className="favorite-content">

                    <h2>
                      {appoinment.name}
                    </h2>

                    <p>
                      🌍 {appoinment.country}
                    </p>

                    <p>
                      ⭐ {appoinment.rating}
                    </p>

                    <p>
                      💰 ₹{appoinment.budget}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removeFavorite(
                            appoinment.id
                          )
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default Favorites;
