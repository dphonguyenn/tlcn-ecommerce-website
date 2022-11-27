import { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { hoverComponentState } from '~/store/selectors';
export const ThemeContext = createContext();
export const ContextProvider = ({ children }) => {
  // state scroll trên toàn bộ ứng dụng
  const [isScrollDown, setIsScrollDown] = useState(false);
  const isHoverComponent = useSelector(hoverComponentState);
  var scrollableElement = document.body;
  useEffect(() => {
    if (!isHoverComponent) {
      scrollableElement.addEventListener('wheel', checkScrollDirection);
    }
    return () => {
      scrollableElement.removeEventListener('wheel', checkScrollDirection);
    };
  });

  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      setIsScrollDown(false);
    } else {
      setIsScrollDown(true);
    }
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  // declare
  const globalState = {
    isScrollDown: isScrollDown,
    setIsScrollDown: setIsScrollDown
  };

  return <ThemeContext.Provider value={globalState}>{children}</ThemeContext.Provider>;
};
