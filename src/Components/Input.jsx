export default function Input(props){
    const {type, placeholder, cn, onChange, children} = props;
    return <input type={type} className={cn} placeholder={placeholder} onChange={onChange}>{children}</input>
}