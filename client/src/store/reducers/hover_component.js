import { getType, hoverOnComponent } from '../actions';
import { INIT_STATE } from '../constants';
export default function menuSearchBarReducer(state = INIT_STATE.hover_component, action) {
  switch (action.type) {
    case getType(hoverOnComponent.setHoverOnComponent):
      switch (action.payload.component) {
        case 'MENU_SEARCH_BAR':
          return {
            ...state,
            menu_searchbar: {
              isHover: action.payload.state
            }
          };
        case 'BOX_USER':
          return {
            ...state,
            box_user: {
              isHover: action.payload.state
            }
          };
        default:
          break;
      }
      break;
    default:
      return state;
  }
}
