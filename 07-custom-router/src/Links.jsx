import { EVENTS } from "./consts";

function navigateTo(href) {
  window.history.pushState({}, null, href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableTarget = target === "_self" || target === undefined;

    if (isMainEvent && !isModifiedEvent && isManageableTarget) {
      event.preventDefault();
      navigateTo(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
