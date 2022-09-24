import useGetHTML from "~/hooks/useGetHTML";

const GetHtml = () => {
  const { __html } = useGetHTML();
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html }}></div>;
};

export default GetHtml;
