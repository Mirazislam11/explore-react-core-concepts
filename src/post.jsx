export default function Post({post}){
    // console.log(post);
   const {title, userId, id, body} = post 

    return(
        <div className="box">
            <h5>Title : {title}</h5>
            <p><small>userID : {userId} </small></p>
            <p><small>postId : {id}</small></p>
            <p>{body}</p>
        </div>
    )
}