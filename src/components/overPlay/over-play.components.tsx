const OverPlayComponent = (props: any): JSX.Element => {
	return (
		<div
			className='w-full h-full fixed bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-[9000] left-0 top-0'
			style={{
				WebkitBoxAlign: 'center',
				WebkitBoxPack: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.4)'
			}}
			onClick={props.handleClose}>
			<div className='flex-initial relative max-w-[438px] max-h-full'>
				{props.children}
			</div>
		</div>
	)
}
export default OverPlayComponent
