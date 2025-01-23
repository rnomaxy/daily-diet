import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const Header = styled.View`
width: "100%";
height: "20%";
flex-direction: row;
justify-content: space-between;
margin-top: 20px;
margin-horizontal: 25px;
`;