import http from "services/http";

interface ILoginResponse {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

export const login = async (data: string) => {
  try {
    const res = await http.post<unknown, ILoginResponse>("/auth/login", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
