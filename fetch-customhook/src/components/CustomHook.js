import useFetch from "./useFetch";

export default function CustomHook(){
    const{data,loading,errors}=useFetch("https://jsonplaceholder.typicode.com/posts");
    if(loading) return <p>Loading posts...</p>;
    if(errors) return <p>Errors: {errors}</p>
    return (
        <div style={{textAlign:"center", padding:"20px",fontSize:"20px"}}>
            <h1>Fetching using custom hook</h1>
            <ul>
                {data && data.slice(0,5).map((post)=>(
                    <li key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}