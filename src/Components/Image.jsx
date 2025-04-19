
export default function Image(props){
    const {src, cn, alt} = props;
    return <img src={src} className={cn} style={{cursor : "pointer"}} alt={alt}></img>
}