import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="João"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus corrupti quae nulla! Adipisci et quaerat soluta impedit cupiditate, dicta blanditiis. Qui culpa odit dolore doloremque, beatae vitae nesciunt delectus consectetur!"
      />
      <Post
        author="André"
        content="Natus corrupti quae nulla! Adipisci et quaerat soluta impedit cupiditate, dicta blanditiis. Qui culpa odit dolore doloremque, beatae vitae nesciunt delectus consectetur!"
      />
    </div>
  );
}
