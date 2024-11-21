const posts = require('../note/posts.js')

//METTO LE FUNZIONI 

//! INDEX

function index(req,res) {
    console.log('Rimando i dati dei post')

    posts.forEach(post => {
        post.tags = post.tags.map(tag => tag.toLowerCase());
    });
    
    let filteredPosts = posts
    let searchedTags = req.query.tags

    console.log(filteredPosts)
    
    if(searchedTags) {
        filteredPosts = posts.filter((post) => {
            return post.tags.includes(searchedTags)

        })
    }

 
 res.json(filteredPosts)
 
 }

 //! SHOW 

 function show (req, res) {
    const id = parseInt(req.params.id); 
    console.log(`Ecco il post con id ${id}`);

    const post = posts.find((post) => post.id === id);
    let result;

    if (!post) {
        console.log(`post ${id} non trovato, ritenta`);

        res.status(404);
        result = {
            error: "Post non trovato",
            message: "Il post non è stato trovato"
        };
    } else {
        result = post; 
    }

    res.json(result);
};

//! STORE

function store (req,res) {
    console.log('Aggiunta del nuovo post')
    res.send('nuovo post aggiunto')
}

//! UPDATE 

function put (req,res)  {
    console.log('Post modificato interamente')
    res.send('Post modificato interamente')
}

//! MODIFY

function patch(req,res) {
    console.log('Post modificato parzialmente')
    res.send('Post modificato parzialmente')
}

//! DESTROY

function destroy (req,res) {
    
    const id = parseInt(req.params.id)
    console.log(`Elimino la pizza con id: ${id}`)

    const postIndex = posts.findIndex((post) => post.id === id)

    if(postIndex === -1) {
        res.status(404)

        return res.json({
               error: "Post non trovato",
            message: "Il post non è stato trovato"
        })
    }else {
        posts.splice(postIndex, 1)
        res.sendStatus(204)
    }
    console.log(posts)
}

 module.exports = {index, show, store, put, patch, destroy}
