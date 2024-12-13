// import { requestClient } from "#/api/request";

export async function getFaceUserDataApi() {
  const list = [
    {
      userID: 0,
      userName: 'anno',
      email: '112312@ads.com',
    },
    {
      userID: 0,
      userName: 'anno',
      email: '112312@ads.com',
    },
    {
      userID: 0,
      userName: 'anno',
      email: '112312@ads.com',
    },
  ];
  return {
    items: list,
    total: 3,
  };
}
