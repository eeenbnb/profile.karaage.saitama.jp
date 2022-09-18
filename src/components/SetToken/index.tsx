import { useState } from "react";
import useSessionToken from "~/hooks/useSessionToken";

const SetToken = () => {
  const { sessionToken, setSessionToken } = useSessionToken();
  const [token, setToken] = useState(sessionToken);
  return (
    <>
      <input
        value={token}
        onChange={(e) => {
          setToken(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setSessionToken(token);
        }}
      >
        setToken
      </button>
    </>
  );
};

export default SetToken;
