import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("hi")}>
      hehe
    </Child>
  );
};

export default Parent;
