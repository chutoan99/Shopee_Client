//? LIBRARY
import { memo } from 'react'
import { LoginFormComponent } from '../../modules/auth/components'

function LoginPage(): JSX.Element {
  return <LoginFormComponent />
}
export default memo(LoginPage)
