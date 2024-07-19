function getTask() {
  const ToDo = {
    todo: "lunch ",
    time: "02:15 pm",
  };
  return ToDo;
}

function postTask() {
  console.log("task created");
}

module.exports = {
  getTask,
  postTask,
};
