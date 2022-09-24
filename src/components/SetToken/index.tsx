import { useState } from "react";
import useSessionToken from "~/hooks/useSessionToken";

const SetToken = () => {
  const { sessionToken, setSessionToken } = useSessionToken();
  const [token, setToken] = useState(sessionToken);
  return (
    <div className="set-token">
      <input
        value={token}
        onChange={(e) => {
          setToken(e.target.value);
        }}
        className="set-token__input"
      />
      <button
        onClick={() => {
          setSessionToken(token);
        }}
        className="set-token__button"
      >
        setToken
      </button>
    </div>
  );
};

export default SetToken;
