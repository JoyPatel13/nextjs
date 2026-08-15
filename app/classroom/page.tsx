
export default async function Classroom(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    return (
        <main>
            <h1>Hello from classroom</h1>
            <p>This is classroom page of the application</p>
            <ul>
                {users.map((user:any)=>{
                    <li key={user.id}> {user.name} </li>
                })}
            </ul>
        </main>
    )
}