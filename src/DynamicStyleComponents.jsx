import styled from "styled-components";
const Button= styled.button`
background-color:${(props) => (props.primary ? "blue": props.secondary? "grey":"green")};
color:white;
padding: 10px 20px;
border:none;
border-radius:5px;
cursor:pointer;

&:hover{
background-color:${(props) => (props.primary ?"darkblue" : props.secondary? "darkgrey" :"darkgreen" )};  
}`

function DynamicStyledComponent(){
    return(
        <div>
            <Button primary>primary Button</Button>
            <Button secondary>Secondary Button</Button>
            <Button tertiary>tertiary Button</Button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Click me</button>
        </div>
    )
}
export default DynamicStyledComponent