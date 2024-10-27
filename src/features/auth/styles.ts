import styled from "styled-components";

export const AuthWrapper = styled.div`
    max-width: 400px;
    margin: 150px auto;
`;

export const Tabs = styled.div`
    display: flex;
    width: 170px;
    justify-content: space-between;
    cursor: pointer;
`;

type TabProps = {
    $isActive: boolean;
};

export const Tab = styled.div.attrs<TabProps>({})`
    padding: 10px;
    margin-bottom: 60px;
    text-align: center;
    font-weight: 600;
    color: ${({ $isActive, theme }) => ($isActive ? theme.colors.primaryText : theme.colors.secondary)};
    border-bottom: ${({ $isActive, theme }) => ($isActive ? `2px solid ${theme.colors.accents}` : "none")};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-top: 20px;
`;

export const Input = styled.input`
    padding: 25px;
    font-size: 16px;
    border-left: 4px solid ${({ theme }) => theme.colors.accents};
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
    padding: 15px 0;
    width: 150px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.accents};
    border-radius: 4px;

    &:hover {
        box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.accents};
    }
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const Text = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
`;

export const Container = styled.div`
    display: flex;
    column-gap: 30px;
    align-items: center;
    margin-top: 35px;
    height: 60px;
`;
