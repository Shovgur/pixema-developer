import { create } from "apisauce";
import { LoginUserDataType, RegisterUserDataType } from "../../types";

const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});

const registerUserApi = (registerUserData: RegisterUserDataType) => {
  return API.post("/auth/register", registerUserData);
};

const loginUserApi = (loginUserData: LoginUserDataType) => {
  return API.post("/auth/login", loginUserData);
};

const searchApi = (token: any, query: any) => {
  return API.get(
    `/search/${query}`,
    {
      limit: 10,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const getFilmsApi = (token: any, page: any, type: any, genre: any, country: any, order: any) => {
  return API.get(
    "/titles",
    {
      perPage: 10,
      page,
      type,
      genre,
      country,
      order,
      includeAdult: true,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const getSelectedFilmApi = (token: any, id: any) => {
  return API.get(
    `/titles/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export { registerUserApi, loginUserApi, searchApi, getFilmsApi, getSelectedFilmApi };
