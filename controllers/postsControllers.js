const menu = require('../db/arrayPosts.js');

exports.store = (req, res) => {
  const { title, content, image } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Scrivi il titolo e il contenuto' });
  }

  const newPost = {
    id: menu.length + 1,
    title,
    content,
    image
  };

  menu.push(newPost);

  return res.status(201).json({
    message: "Post creato con successo",
    data: newPost,
    count: menu.length
  });
};


exports.update = (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content, image } = req.body;

  const post = menu.find(post => post.id === postId);

  if (!post) {
    return res.status(404).json({ error: 'Post non trovato' });
  }

  if (title) post.title = title;
  if (content) post.content = content;
  if (image) post.image = image;

  return res.json({
    message: "Post aggiornato con successo",
    data: post
  });
};

exports.destroy = (req, res) => {
  const postId = parseInt(req.params.id);

  const postIndex = menu.findIndex(post => post.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Postt non trovato' });
  }

  menu.splice(postIndex, 1);

  return res.json({
    message: "Post eliminato con successto",
    data: menu
  });
};
