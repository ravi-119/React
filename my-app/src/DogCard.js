import Image from "./image";
import Name from "./Name";
function DogCard(props) {
    let tittle = "this is a dog card";
    return (
        <>
            <h2 style={
                {
                    fontSize: '100px',
                    color: 'red' 
                }
            }>
                {tittle}
            </h2>
            <Name>
                <h3> {props.name} </h3>
            </Name>
            <Image src={props.Image}/>
            

        </>
    );
}
export default DogCard; // dogCard this is a camel case
