export const generateStart = (start: number) => {
  let starts = [];
  for (let i = 1; i <= +start; i++) {
    starts.push(
      <span className="text-[#ee4d2d]">
        <i className="fa-solid fa-star"></i>
      </span>
    );
  }
  for (let j = 1; j <= 5 - start; j++) {
    starts.push(
      <span>
        <i className="fa-solid fa-star"></i>
      </span>
    );
  }
  return starts;
};
export const generateStartFilter = (start: number) => {
  let starts = [];
  for (let i = 1; i <= +start; i++) {
    starts.push(<i className="star-checked far fa-star"></i>);
  }
  for (let j = 1; j <= 5 - start; j++) {
    starts.push(<i className="star-uncheck far fa-star"></i>);
  }
  return starts;
};
