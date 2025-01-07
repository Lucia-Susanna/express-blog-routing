const posts = require('./data/posts');
const express = require ('express');
const app = express();
const postsRouter = require('./routers/posts')
const port = 3000

// app.get('/', (req, res) =>{
//   res.send('server dei post')
// })

app.use('/posts', postsRouter)

app.listen(port, () =>{
  console.log(`sono in ascolto alla porta ${port}`);
  
})


