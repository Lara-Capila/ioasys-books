import styled from 'styled-components';
import { Button } from 'antd';

import Colors from '../../styles/colors';

const ButtonContainer = styled(Button)`
  width: 85px;
  height: 36px;
  margin: 12px;
  background: ${Colors.white};
  color: ${Colors.buttonLabelColor};
  border-radius: 44px;
  border: none;

  :hover {
    opacity: 0.9;
  }

  :disabled {
    cursor: not-allowed;
    color: #c7c7cc;
  }
`;

export default ButtonContainer;
