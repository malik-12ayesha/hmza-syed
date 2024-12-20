"use client"
interface Iprops{
    text:string
}


const Button = (props:Iprops)=>{
const handleClicked=()=>{
    alert('botton clicked')

};
return(
    <button  onClick={ handleclick } className="text-white bg-blue-500 px-4 py-2">{ props.text }
        
        </button>
);
};