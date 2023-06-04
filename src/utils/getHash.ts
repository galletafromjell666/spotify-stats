interface hashParams {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export const getHash = (): hashParams => {
  if (!window)
    return {
      access_token: "",
      expires_in: 0,
      token_type: "",
    };

  const hash = window.location.hash.substr(1);

  return hash.split("&").reduce((result: { [key: string]: string }, item) => {
    if (item) {
      const [key, value] = item.split("=");
      result[key] = decodeURIComponent(value);
    }
    return result;
  }, {}) as unknown as hashParams;
};
