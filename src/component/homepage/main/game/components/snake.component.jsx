import styled from "@emotion/styled";

const SnakeItem = styled.div`
	position: absolute;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background: #43D9AD;
    ${'' /* background: rgb(67,217,173);
    background: linear-gradient(90deg, rgba(67,217,173,0) 0%, rgba(67,217,173,0.2315519957983193) 12%, rgba(67,217,173,0.3828125) 21%, rgba(67,217,173,0.4416360294117647) 40%, rgba(67,217,173,0.640515581232493) 55%, rgba(67,217,173,0.7581626400560224) 73%, rgba(67,217,173,1) 100%); */}
    -webkit-box-shadow: 0px 0px 30px 6px rgba(67,217,173,0.72); 
    box-shadow: 0px 0px 30px 6px rgba(67,217,173,0.72);
    z-index: 2;
    top: ${(props) => props.top};
	left: ${(props) => props.left};
`;

export const Snake = (props) => {
    return props.snakeDots.map((snakeDot, i) => (
		<SnakeItem key={i} top={`${snakeDot[0]}rem`} left={`${snakeDot[1]}rem`} />
	));
}