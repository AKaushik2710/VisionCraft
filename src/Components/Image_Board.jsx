import Image from "./Image";
import Div from "./Div";
export default function ImageBoard(props){
    const {images} = props;
    return <>
    {images.map((image, index)=>{
        return <Div cn="col-12 col-md-6 col-lg-4 mb-3 m-0 " key={index}>
            <Div cn="card ">
                <Image src={image.urls.small} cn="card-img-top " alt={image.alt_description}></Image>
            </Div>
        </Div>
    })}
    </>
}