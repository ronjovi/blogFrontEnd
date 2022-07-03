import "./post.css"

export default function Post({post}){
    return (
        <div className="posts">
            <h1>{post.title}</h1>
        </div>
    )
}