import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   width: 100%;
   box-shadow: 0px 0px 20px rgba(176, 176, 176, 0.25);
   border-radius: 20px;
   height: 100%;

   button {
      border-radius: 0 0 20px 20px;
   }

   img{
      max-height: 250px;
      object-fit: cover;
      border-radius: 20px 20px 0 0;
   }

   p{
      color: #686D76;
   }

   div{
      font-family: Arial;
      padding: 1rem;
      height: 100%;

      h3{
         color : #373A40;
      }

      .__price{
         color : #581B98
      }
   }
`;