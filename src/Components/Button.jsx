export default function Button(props){
    const {cn, onClick, children} = props;
    return <button className={cn} onClick={onClick}>{children}</button>
}