import { selector, useRecoilValue, useSetRecoilState } from "recoil";

import { state } from "./useSessionToken";

const htmlSelector = selector({
  key: "html/text",
  get: async ({ get }) => {
    const response = await fetch(`/api/getProfile?${new URLSearchParams({ token: String(get(state)) })}`);
    return response.json();
  },
});

export default function useGetHTML() {
  const { __html } = useRecoilValue(htmlSelector);

  return {
    __html,
  };
}
