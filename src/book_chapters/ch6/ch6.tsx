import { createRoot } from "react-dom/client";
import { Greeting, UserCard, Button } from "./props";
import { Counter } from "./state";
import { InputField } from "./handlers";
import { InputWithRef } from "./refs";

type AppProps = {
    message: string;
}

function App({ message }: AppProps ) {
    return <div>{message}</div>
}

const root = createRoot(document.getElementById("root")!)
const card = <UserCard user={{name: "Kunle", email: "eniolakunle10@gmail.com"}} />

root.render(
    <>
    <Greeting
    name="Kunle"
    />
    <UserCard user={{name: "Kunle", email: "eniolakunle10@gmail.com"}} />
    <Button 
    children={card}
    />
    <Counter />
    <InputField />
    <InputWithRef />
    </>
    // <App message="Hello" />
    // <App />
)