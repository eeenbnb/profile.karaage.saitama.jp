import useGetHTML from "~/hooks/useGetHTML";

const GetHtml = () => {
  const { __html } = useGetHTML();
  return <div dangerouslySetInnerHTML={{ __html }}></div>;
};

export default GetHtml;
