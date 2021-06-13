import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const StyledIconButton = styled(IconButton)`
  position: fixed;
  right: 48px;
  bottom: 48px;
  background-color: #4a9bdb;
  color: #ffffff;
  height: 112px;
  width: 112px;
  &:hover {
    background-color: #4a9bdb;
  }
  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
    height: 64px;
    width: 64px;
  }
  svg {
    height: 96px;
    width: 96px;
    @media (max-width: 768px) {
      height: 56px;
      width: 56px;
      bottom: 16px;
      right: 16px;
    }
  }
`;
