export default function Post({post}) {
    const {title, id, userId, body} = post;

    return (
        <div className="post">
            <h5>Title: {title}</h5>
            <div className="flex justify-around">
                <p><small>User Id: {userId}</small></p>
                <p><small>Post Id: {id}</small></p>
            </div>
            <p>{body}</p>
        </div>
    )
}