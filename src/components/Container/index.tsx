import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Container: FC<Props> = ({ children }) => {
  return (
    <main className="container">
      <div className="container__inner">{children}</div>
    </main>
  );
};

export default Container;
