import styled from "styled-components";

 const Button = styled.button`
  /* Common styles for all buttons */
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  
  /* Default button styles */
  background-color: #61DAFB;
  color: #333;
  width:100%;
  transition:550ms all;
  &:hover {
        background-color: #fff;
        color: #333;
  }
  
  `
  export default Button;
  


 