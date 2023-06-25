import styled, { css } from 'styled-components/native'

export const TabBarItemContainer = styled.View``

type TabBarItemTextProps = {
  active: boolean
}

export const TabBarItemText = styled.Text<TabBarItemTextProps>`
  color: ${({ theme }) => theme.COLORS.BORDER};
  font-size: 14px;

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 600;
      transform: scale(1.1);
    `}
`
