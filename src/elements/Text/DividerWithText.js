import styled from 'styled-components'

export const DividerWithText = styled.div`
  margin: ${(props) => props.theme.spacings.medium};
  display: flex;
  align-items: center;
  text-align: center;

  color: ${(props) => props.theme.colors.dividerText.divider};

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid
      ${(props) => props.theme.colors.dividerText.divider};
  }

  &:not(:empty)::before {
    margin-right: ${(props) => props.theme.spacings.small};
  }

  &:not(:empty)::after {
    margin-left: ${(props) => props.theme.spacings.small};
  }
`
