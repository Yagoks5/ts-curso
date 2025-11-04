import axios from "axios";

axios("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));
