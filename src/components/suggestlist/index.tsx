//? LIBRARY
import { NavLink } from 'react-router-dom';
import { SearchSuggestion } from '../../types/searchSuggestion';
//? APPS
interface SuggestListModel {
  data: SearchSuggestion[];
}

function SuggestList({ data }: SuggestListModel) {
  return (
    <div className="SuggestionList  Hide-on-mobile">
      <div className="SuggestionList-item">
        {data?.map((item: SearchSuggestion) => {
          return (
            <NavLink to={`/search/${item.text}`} className="SuggestionList-item hover:opacity-70" key={item.id}>
              {item?.text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
export default SuggestList;
