import React, { FC } from 'react'

import { ButtonProps, Button as CButton } from '@carbon/react'

interface Props extends ButtonProps<any> {
  label: string
}

const Button: FC<Props> = ({ label, ...props }) => {
  return (
    <CButton kind="primary" {...props}>
      {label}
    </CButton>
  )
}

export default Button
