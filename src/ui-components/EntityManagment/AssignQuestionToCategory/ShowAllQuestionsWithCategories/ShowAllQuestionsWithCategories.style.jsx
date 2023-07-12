import styled from 'styled-components'

export const ShowAllQuestionsWithCategories = styled.div`
  width: 80%;
  height: auto;
  margin: 2rem;
  margin-left: auto;
  margin-right: auto;
  Table {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;

    background: rgb(55, 130, 153);
    background: linear-gradient(
      0deg,
      rgba(55, 130, 153, 1) 0%,
      rgba(70, 174, 199, 0.7231267507002801) 5%,
      rgba(0, 0, 0, 0) 18%
    );

    tr,
    th,
    td {
      padding: 0.5em;
      border: 2px solid;
      border-collapse: collapse;
      border-color: #378299;

      button {
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        font-size: 1em;
        color: #378299;
        border-radius: 5px;
        border-collapse: collapse;
        border: 2px solid white;

        justify-content: center;
        align-items: center;
      }
      button:hover {
        color: saddlebrown;
      }
      button:active {
        color: gray;
      }
    }
    th {
      color: white;
      background-color: #378299;
    }
  }
`
