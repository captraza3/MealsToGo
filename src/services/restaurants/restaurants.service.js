import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    } else {
      resolve(mock.results);
    }
  });
};

export const restaurantsTransform = (results = []) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos =
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    return {
      ...restaurant,
      isCloseTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      address: restaurant.vicinity,
    };
  });
  const transformData = camelize(mappedResults);
  return transformData;
};

// RestaurantsRequest()
//   .then(restaurantsTransform)
//   .then((transformResponse) => {
//     console.log(transformResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
