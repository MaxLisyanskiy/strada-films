interface IApiOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
  body?: BodyInit;
}

export function ApiOptions(token: string, body?: BodyInit): IApiOptions {
  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body,
  };
}
