import { Input } from 'antd';
import styled from 'styled-components';
import { Colors } from '../../globalStyles';

export const Container = styled.div`
  max-width: 300px;
`;

export const InputField = styled(Input)`
  border: none;
  box-shadow: none;
  width: 300px;
  height: 45px;
  background: rgba(0, 0, 0, 0.32);

  color: ${Colors.white};

  ::placeholder {
    color: ${Colors.white};
    opacity: 0.5;
    size: 12px;
    line-height: 16px;
  }
`;
