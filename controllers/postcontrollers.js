const express = require('express');
const posts = require('../note/posts.js')
let lastIndex = posts.at(-1).id

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
    const { title, slug, content, image, tags} = req.body

    lastIndex++

    const post = {
        id: lastIndex,
        title,
        slug,
        content,
        image,
        tags
    }

    posts.push(post)

    res.status(201).send(post)
}

//! UPDATE 

function put (req,res)  {
    console.log('Post modificato interamente')
    console.log('Post modificato interamente')
    
    const id = parseInt(req.params.id)

    const post = posts.find((post) => post.id === id)

    if(!post) {
        res.status(404)

        return res.json({
            error : "Post non trovato",
            message : error
        })
    }
    const { title, slug, content, image, tags} = req.body

    post.title = title
    post.slug = slug
    post.content = content
    post.image = image
    post.tags = tags

res.json(post)
}

//! MODIFY

function patch(req,res) {
    console.log('Post modificato parzialmente')
    const id = parseInt(req.params.id)

	const post = posts.find((post) => post.id === id)

	if (!post) {
		res.status(404)

		return res.json({
			error: 'Post not found',
			message: 'Il Post non é stato trovato.',
		})
	}

    const { title, slug, content, image, tags} = req.body

	if (title) post.title = title
	if (slug) post.slug = slug
    if (content) post.content = content
	if (image) post.image = image
    if (tags) post.tags = tags

	res.json(post)
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
