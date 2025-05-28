import { Link } from "react-router-dom"

export function MyComponent() {
    return (
    <>
        <nav>
            <Link to="/kunle">Kunle</Link>
        </nav>
        <p>Hello Router!</p>
    </>
    )
}

export function Kunle() {
    return <img src="src/assets/DSCF3953.JPG" alt="" width="300px" />
}