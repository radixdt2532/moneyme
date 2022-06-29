const axios = require('axios').default;
import URL from './URL';

// To get data from GET Api

export const GetApi = async (reqUrl: String, paramData: any) => {
  const res = await axios.get(`${URL.BASE_URL}${reqUrl}`, paramData, {
    headers: {
      Authorization: 'Bearer ' + '',
    },
  });
  return JSON.stringify(res.data);
};

