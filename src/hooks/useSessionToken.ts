import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const state = atom<string>({
  key: "session/token",
  default: "",
});

export default function useSessionToken() {
  const sessionToken = useRecoilValue(state);
  const setSessionToken = useSetRecoilState(state);

  return {
    sessionToken,
    setSessionToken,
  };
}
