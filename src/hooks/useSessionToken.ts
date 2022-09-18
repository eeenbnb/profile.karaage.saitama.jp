import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const state = atom<string | undefined>({
  key: "session/token",
  default: undefined,
});

export default function useSessionToken() {
  const sessionToken = useRecoilValue(state);
  const setSessionToken = useSetRecoilState(state);

  return {
    sessionToken,
    setSessionToken,
  };
}
