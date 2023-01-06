import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data;
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
        The Todo with ID: ${ID}
        Has a title of: ${title}
        Is it completed? ${completed}
    `);
});
