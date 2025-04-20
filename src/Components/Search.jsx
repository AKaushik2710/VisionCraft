import { useState } from "react";
import Div from "./Div";
import Input from "./Input";
import Button from "./Button";

// Search Component
export default function Search(props){
    const [myQuery, setmyQuery] = useState("");
    const {onSearch} = props;
    
// Submission handler
    function handleSubmit(e){
        e.preventDefault();
        if (myQuery.trim() === "") return;
        else onSearch(myQuery)
    }

// Query State Setter
    function handleQuery(e){
        setmyQuery(e.target.value);
    }
    return <>
    <Div cn="col-4 text-center  text-light">
        <form onSubmit={handleSubmit} className="justify-content-center align-items-center p-0 m-0 ">
            <Div cn="input-group">
            <Input type="text" cn=" p-2 form-control" placeholder="Enter your vision" onChange={handleQuery}/>
            <Button cn="btn btn-secondary input-group-text" type="submit"><i className="bi bi-search"></i></Button>
            </Div>
        </form>
    </Div>
    </>
}