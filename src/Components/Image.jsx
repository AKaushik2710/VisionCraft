
export default function Image(props){
    const {src, cn, alt} = props;
    return <img src={src} className={cn} alt={alt}></img>
}