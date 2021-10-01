import styled from "styled-components";

export const Div = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const Form = styled.form`
  width: 400px;

  margin: auto;
  display: ${({ open }) => (open ? "block" : "none")};
  input,
  textarea {
    padding: 10px;
    color: pink;
    display: block;
    width: 100%;
    margin: 10px 0;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1200px;
  margin: auto;
`;
export const Card = styled.div`
  width: 30%;
  color: red;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: white;
  p {
    word-wrap: break-word;
  }
`;

export const Button = styled.button`
  width: 5%;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
export const Button1 = styled.button`
  width: 20%;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
export const Button2 = styled.button`
  display: block;
  width: 20%;
  margin: auto;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  Img {
    width: 100%;
  }
`;

export const Button3 = styled.button`
  width: 40%;
  height: 40px;
  background: rgb(255, 0, 211);
  background: linear-gradient(
    200deg,
    rgba(255, 0, 211, 1) 25%,
    rgba(6, 54, 242, 1) 50%,
    rgba(74, 255, 0, 1) 75%,
    rgba(255, 0, 0, 1) 100%
  );
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;
