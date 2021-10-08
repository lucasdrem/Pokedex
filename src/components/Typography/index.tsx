import React from 'react'

import * as S from 'components/Typography/styles'

export interface ITypographyProps {
  variant?: 'h6' | 'h3' | 'h2' | 'h1' | 'body1' | 'subtitle1'
}

const Typography: React.FC<ITypographyProps> = ({
  children,
  variant = 'body1'
}) => {
  return <S.Container variant={variant}>{children}</S.Container>
}

export default Typography
