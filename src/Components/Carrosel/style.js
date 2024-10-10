import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	position: absolute;
	flex-direction: column;
	top: 45%;
	gap: 1rem;
	text-align: center;
	align-items: center;
	padding: 0 0.7rem;
	
	@media (min-width: 480px) {
		padding: 0 1rem;
		top: 50%;
	} 
	@media (min-width: 768px) {
		top: 52%;
	} 
	@media (min-width: 1024px) {
		text-align: start;
		align-items: start;
		padding: 0 4rem;
		top: 20%;
		gap: 1.7rem;
	}
	
`
export const H3 = styled.h3`
	color: var(--warning);
	font-weight: 700;
`
export const TitleMain = styled.h1`
	font-size: 2.4rem;
	font-weight: 800;
	max-width: 350px;
	width: 100%;
	color: var(--dark-gray);

	@media (min-width: 480px) {
		font-size: 2.7rem;
		line-height: 45px;
	}
`
export const Paragraph = styled.p`
	color: var(--dark-gray-2);
	max-width: 350px;
	width: 100%;
`
export const Imagem = styled.img`
	width: 100%;
	height: 681px;
	position: relative;
	bottom: 20%;
	left: -0.5%;

	@media (min-width: 559px) and (max-width: 767px) {
		width: 80%;
		bottom: 20%;
	}
	@media (min-width: 768px) {
		width: 70%;
		bottom: 20%;
	}
	@media (min-width: 1024px) {
		width: 70%;
		left: 15%;
		bottom: 4%;
	}
	@media (min-width: 1440px) {
		width: 100%;
		bottom: 7%;
	}
`
export const Effect = styled.img`
	position: absolute;
	left: 86%;
	bottom: 32rem;
`