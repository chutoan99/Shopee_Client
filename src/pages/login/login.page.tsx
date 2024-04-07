//? LIBRARY
import { memo } from 'react'
import { LoginFormComponent } from '../../modules/auth/component'

function LoginPage(): JSX.Element {
  return <LoginFormComponent />
}
export default memo(LoginPage)
