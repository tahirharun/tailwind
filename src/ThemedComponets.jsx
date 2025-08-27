import styled, { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "blue",
        secondary: "gray",
        tertiary: "red"
    }
};

const Button = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

function ThemedComponent() {
    return (
        <ThemeProvider theme={theme}>
            <Button>Themed Button</Button>
        </ThemeProvider>
    );
}
export default ThemedComponent;