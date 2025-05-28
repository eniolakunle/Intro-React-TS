import { useState } from "react"
import { Button } from "./props";

export const InputField = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <>
    <h1>{value}</h1>
    <input value={value} onChange={handleChange} />
    </>
    );
};