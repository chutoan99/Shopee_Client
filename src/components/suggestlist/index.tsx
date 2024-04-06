//? LIBRARY
import { NavLink } from 'react-router-dom';
import { SearchSuggestion } from '../../modules/searchSuggestion/interface';
//? APPS
interface SuggestListModel {
  data: SearchSuggestion[];
}

export default function SuggestList({ data }: SuggestListModel) {
  return (
    <div className="w-full overflow-hidden flex">
      <div className="h-[18px] text-[0.813rem] font-light overflow-y-visible flex-wrap relative mr-[55px] mt-[1.875px]">
        {data?.map((item: SearchSuggestion) => {
          return (
            <NavLink
              to={`/search/${item.text}`}
              className="text-[#fff] no-underline h-[18px] text-[0.813rem] font-light overflow-y-visible relative mr-2.5 mt-[1.875px] hover:opacity-70"
              key={item.id}
            >
              {item?.text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
