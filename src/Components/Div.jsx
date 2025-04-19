export default function Div(props){
    const {children, cn, onClick} = props;
    return <div className={cn} onClick={onClick}>{children}</div>    
}