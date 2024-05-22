//? LIBRARY
import { Toaster } from 'react-hot-toast'
//? APPS
import { RootState } from '../../redux'
import { useAppSelector } from '../../hooks/hooks'
import useAuth from '../../hooks/userAuth'
import { FooterComponent, ChatComponent, HeaderComponent } from '../../modules/shared'

export default function DefaultLayout({ children }: any): JSX.Element {
	useAuth()
	const { heart } = useAppSelector((state: RootState) => state.others)
	return (
		<div className='overflow-hidden'>
			<Toaster position='top-right' reverseOrder={false} />
			{heart && (
				<div className='fixed z-[100000] flex items-center justify-center animate-[heart_2s_ease_0s_1_normal_forwards] inset-0'>
					<svg
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='206.000000pt'
						height='206.000000pt'
						viewBox='0 0 206.000000 206.000000'
						preserveAspectRatio='xMidYMid meet'>
						<g
							transform='translate(0.000000,206.000000) scale(0.100000,-0.100000)'
							fill='#ff424f'
							stroke='none'>
							<path d='M647 1668 c-118 -15 -232 -102 -285 -216 -32 -68 -42 -195 -22 -270 47 -172 222 -403 474 -621 143 -124 213 -174 228 -165 55 33 227 182 343 299 191 191 297 345 335 487 20 75 10 202 -22 270 -123 264 -489 297 -651 59 l-16 -25 -23 30 c-91 118 -215 171 -361 152z' />
						</g>
					</svg>
				</div>
			)}
			<HeaderComponent />
			{children}
			<ChatComponent />
			<FooterComponent />
		</div>
	)
}
