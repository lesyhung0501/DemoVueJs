import axiosAPI from ".";
export const getTicketListByUserAPI = (userId) => {
  return axiosAPI.get(`/tickets/by-user?userId=${userId}`);
};
