import axiosAPI from ".";

export const getRoomListByLoactionAPI = (locationId) => {
  return axiosAPI.get(`/rooms?locationId=${locationId}`);
};

export const getRoomDetailAPI = (roomId) => {
  return axiosAPI.get(`/rooms/${roomId}`);
};

export const bookingRoomAPI = (data) => {
  const { token } = JSON.parse(localStorage.getItem("userLogin"));
  return axiosAPI.post("/rooms/booking", data, {
    headers: {
      token,
    },
  });
};
