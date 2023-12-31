import styled from '@emotion/styled';

export const RegisterPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  

  @media screen and (max-width: 767px) {
    padding-top: 44px;
   
    }
  }
`;

export const RegisterFormWrapper = styled.div`
  padding: 60px 75px;
  width: 608px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    padding: 40px 12px;
    max-width: 280px;

    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
  }
`;
