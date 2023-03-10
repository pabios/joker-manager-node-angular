import {add_post, delete_post, edit_post, get_post, getAllPosts, like_post} from "../service/postService.js";


/**
 * users http://{hostname}:{port}/posts
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function posts(req, res) {
    let response = await getAllPosts();
    console.log(response)
    return res.status(200).json(response);
}


/**
 * users http://{hostname}:{port}/posts/add
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function addPost(req, res){
    let response = await add_post(req,res);

    console.log(response)
    return response;
}

/**
 * users http://{hostname}:{port}/post/like/:id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function likePost(req, res){
    let response = await like_post(req);

    if(!response){
        return res.status(404).json({ error: 'Post not found' });
    }

    console.log(response)
    return res.status(200).json({ success: 'like ok',info:response });
}

export async function editPost(req,res){
    let response = await  edit_post(req);

    if(!response){
        return res.status(404).json({ error: '404 Error' });
    }

    console.log(response)
    return res.status(200).json({response });
}


export async function getPost(req,res){
    let response = await get_post(req);

    if(!response){
        return res.status(404).json({ error: 'Post not found 404' });
    }

    console.log(response)
    return res.status(200).json({response });
}

export async function deletePost(req,res){
    let response = await delete_post(req);

    if(!response){
        return res.status(404).json({ error: 'Post not found 404' });
    }

    console.log(response)
    return res.status(200).json({response });
}
