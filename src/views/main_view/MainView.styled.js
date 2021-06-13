import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';

export const StyledMain = styled.main`
  max-width: 100%;
  @media (min-width: 900px) {
    max-width: 80%;
  }
  margin: 120px auto;
  display: grid;
  justify-items: center;
  grid-gap: 70px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 350px;
`;

export const StyledCard = styled(Card)`
  height: 100%;
  max-width: 300px;
  width: 100%;
  background-color: #4a9bdb;
  color: #ffffff;
  text-align: center;
`;

export const StyledIconButton = styled(IconButton)`
  height: 80%;
  svg {
    height: 100%;
    width: 100%;
    fill: #ffffff;
  }
`;
