//? LIBRARY
import { memo } from 'react'
import { RegisterFormComponent } from '../../modules/auth/components'

function RegisterPage(): JSX.Element {
  return <RegisterFormComponent />
}

export default memo(RegisterPage)
