import styled from "styled-components";

const AccessPlants = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  align-content: center;
  background-color: ${(props) => props.theme.buttonBG};

  img {
    border-radius: 20px;
    margin: 2%;
    height: 17vh;
    transition: 0.5s;
  }
  img:hover {
    opacity: 0.6;
  }
  h3 {
    font-size: 4rem;
    font-weight: bold;
    color: ${(props) => props.theme.buttonColor};
    text-shadow: black 2px 2px 2px;
  }
  h4 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 5%;
  }
  h5 {
    font-size: 1.2rem;
  }
  label {
    font-size: 1.5rem;
    font-weight: bold;
  }
  button {
    background-color: ${(props) => props.theme.buttonBG};
    color: ${(props) => props.theme.buttonColor};
    padding: 1% 4%;
    border-radius: 10px;
    margin: 1% 0;
  }
  input {
    border: ${(props) => props.theme.buttonBG} solid 3px;
    border-radius: 6px;
    font-size: 1.2rem;
    margin: 1% 0%;
    color: black;
    box-shadow: ${(props) => props.theme.buttonBG} 3px 2px 2px;
  }
  .myPlants {
    // display: flex;
    // flex-direction: row;
    // justify-content: space-evenly;
    // align-items: center;
    margin: 3% 1%;
    padding: 2% 0%;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: auto;
    grid-column-gap: 5px;
    grid-row-gap: 20px;
    justify-content: center;
    width: 95%;
    background-color: ${(props) => props.theme.buttonColor};
    border-radius: 30px;
  }
  .each {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
  }
  .none {
    display: none;
  }
  .edit {
    color: ${(props) => props.theme.buttonColor};
    background-color: ${(props) => props.theme.buttonBG};
    font-size: 1.5rem;
    padding: 2% 4%;
    border-radius: 10px;
  }
  .addPlant {
    font-size: 2rem;
    color: ${(props) => props.theme.buttonColor};
    text-shadow: black 2px 2px 2px;
    text-decoration: underline;
    margin: 0;
  }
  .cancel {
    margin-left: 3%;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.buttonColor};
    padding: 7% 0;
    margin: 1% 15%;
    border: black 2px solid;
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 4rem;
    }
    h4 {
      font-size: 2.5rem;
    }
    h5 {
      font-size: 1.7rem;
    }
    .myPlants {
      // display: flex;
      // flex-direction:column;
      // justify-content: center;
      // align-items: center;
      // width: 85%;
      justify-content: center;
      align-items: center;
      width: 85%;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-row-gap: 20px;
      justify-items: center;
      align-items: center;
    }
    .each {
      width: 100%;
      margin: 5%;
    }
    .info {
      padding: none;
    }
    @media (max-width: 500px) {
      h3 {
        font-size: 3rem;
      }
      h4 {
        font-size: 2rem;
      }
      h5 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default AccessPlants;