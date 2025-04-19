import { useState } from "react";
import Div from "./Div";
import Input from "./Input";
import Button from "./Button";

export default function Search(props){
    const [myQuery, setmyQuery] = useState("");
    const {onSearch} = props;
    
    function handleSubmit(e){
        e.preventDefault();
        onSearch(myQuery)
    }

    function handleQuery(e){
        setmyQuery(e.target.value);
    }
    return <>
    <Div cn="col-4 text-center  text-light">
        <form onSubmit={handleSubmit} className="justify-content-center align-items-center p-0 m-0 ">
            <Div cn="input-group">
            <Input type="text" cn=" p-2 form-control" placeholder="Enter your name" onChange={handleQuery}/>
            <Button cn="btn btn-secondary input-group-text" type="submit"><i className="bi bi-search"></i></Button>
            </Div>
        </form>
    </Div>
    </>
}