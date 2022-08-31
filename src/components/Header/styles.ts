import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.header};

  .header-bottom,
  .header-top {
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  .header-top {
    .lang {
      display: flex;
      align-items: center;
      gap: 1rem;

      div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 2rem;

      

      div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
  }

  .header-bottom {
    div,
    ul {
      display: flex;
      align-items: center;
    }

    div {
      gap: 0.5rem;

      p {
        font-weight: 700;
      }
    }

    ul {
      gap: 3rem;

      li:first-child {
        color: ${({ theme }) => theme.colors["base-blue"]};
      }

      li {
        font-size: 1.25rem;
        font-weight: 500;
      }
    }
  }
`;
