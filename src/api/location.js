import axiosAPI from ".";
export const getLocationListAPI = (location) => {
  return axiosAPI.get(`/locations?location=${location}`);
};
