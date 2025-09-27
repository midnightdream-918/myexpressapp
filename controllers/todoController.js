let todos = [
  { id: 1, text: "Học Node.js" },
  { id: 2, text: "Học Express" },
];

exports.getTodos = (req, res) => {
  res.json(todos);
};

exports.getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ message: "Không tìm thấy todo" });
  res.json(todo);
};

exports.createTodo = (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ message: "Không tìm thấy todo" });
  todo.text = req.body.text;
  res.json(todo);
};

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Xóa thành công" });
};
