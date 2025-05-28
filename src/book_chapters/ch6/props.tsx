type GreetingProps = {
    name: string;
};

export const Greeting = ({ name }: GreetingProps) => {
    return <h1>Hello, {name}!</h1>;
}

type UserProps = {
    user: {
        name: string;
        email: string;
    }
}

export const UserCard = ({ user }: UserProps) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
};

type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
};

export const Button = ({ children, disabled = false}: ButtonProps) => {
    return <button disabled={disabled}>{children}</button>
}