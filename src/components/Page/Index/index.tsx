import { Suspense } from "react";

import Container from "~/components/Container";
import SetToken from "~/components/SetToken";
import GetHtml from "~/components/GetHtml";

const Index = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <SetToken />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <GetHtml />
      </Suspense>
    </Container>
  );
};

export default Index;
