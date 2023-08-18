const OverPlay = (props: any) => {
  return (
    <div className="home-popup__background" style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }} onClick={props.handelClose}>
      <div className="home-popup__content">{props.children}</div>
    </div>
  );
};
export default OverPlay;
