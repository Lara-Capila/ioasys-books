import { Input } from 'antd';
import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  max-width: 300px;
`;

export const InputField = styled(Input)`
  border: none;
  box-shadow: none;
  width: 300px;
  height: 45px;
  background: ${Colors.black32};

  color: black;

  ::placeholder {
    color: ${Colors.white};
    opacity: 0.5;
    size: 12px;
    line-height: 16px;
  }
`;
