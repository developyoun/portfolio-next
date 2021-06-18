import ReactMarkdown from "react-markdown";
import HistoryMarkDown from "../../markdown/history.md"

import styled from "styled-components";

const Container = styled.div`
  font-size: 1.6rem;
  margin: 3rem;
  
`;

const MyHistory = () => {
  return(
    <Container>
      <ReactMarkdown children={HistoryMarkDown}/>
    </Container>
  )
}
export default MyHistory;