import styled from 'styled-components';
import { ImQuotesLeft } from 'react-icons/im';
import { Button } from 'antd';
import Colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 769px;
  /* height: 100%; */
`;

export const ImageBookContainer = styled.img`
  width: 100%;
  height: 512px;
  margin-left: 32px;
  margin-right: 16px;

  background: ${(props) => `url(${props.imageUrl})`} no-repeat;
  background-position: center;
  background-size: cover;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 349px;
  height: 512px;
  margin-right: 32px;
`;
export const BookTitle = styled.div`
  font-size: 28px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 349px;
`;

export const Authors = styled.span`
  color: ${Colors.authorBookDetail};
  size: 8px;
  line-height: 20px;
`;

export const ContainerAuthors = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const InfosContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 15px 0px 20px 0px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h5`
  font-weight: bold;
`;

export const InfoSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 12px;
`;

export const Result = styled.div`
  color: ${Colors.detailBook};
  font-size: 12px;
  line-height: 20px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const QuotesIcon = styled(ImQuotesLeft)`
  color: #333333;
`;

export const Description = styled.div`
  text-align: justify;
  width: 330px;
  margin-left: 4px;
  color: ${Colors.detailBook};
`;

export const ButtonClose = styled(Button)`
  background-color: transparent;
  color: ${Colors.buttonLabelColor};
  border: 1px solid ${Colors.buttonLabelColor};
  border-radius: 8px;

  :hover {
    background-color: ${Colors.buttonLabelColor};
    color: ${Colors.white};
    border: 1px solid ${Colors.buttonLabelColor};
  }
`;
