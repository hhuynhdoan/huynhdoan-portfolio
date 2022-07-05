import styled from "@emotion/styled";

const FoodItem = styled.div`
    position: absolute;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background-color: #43D9AD;
    -webkit-box-shadow: 0px 0px 30px 6px rgba(67,217,173,0.72); 
    box-shadow: 0px 0px 30px 6px rgba(67,217,173,0.72);
    z-index: 1;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
`;
export const Food = (props) => {
    return (
        <FoodItem top={`${props.foodDot[0]}rem`} left={`${props.foodDot[1]}rem`} />
    )
}