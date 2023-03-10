import styled from "styled-components";

type Props = {
  reverse? : boolean
}

// image goes first in slots
const ImageTextSplit = styled.div`
  width:100%;
  display:flex;
  flex-direction: ${(props:Props) => props.reverse? 'row-reverse' : 'row'};
  @media (min-width: 767px){
    > div{
    width:50%;
  }
    
  }
  @media (max-width: 766px){
    flex-direction: column;

  }
`
export default ImageTextSplit