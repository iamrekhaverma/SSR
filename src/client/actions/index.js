export const FETCH_USERS = "FETCH_USERS";
export const fetchUsers = () => async (dispatch, getState, api) => {
  console.log("api", api);
  const res = await api.get("/users");
  console.log("res", res);

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};
