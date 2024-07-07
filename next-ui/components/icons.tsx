export function Icon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "opener":
      return opener(className);
    case "closer":
      return closer(className);
    case "claimLoader":
      return claimLoader();
    case "makeClaim":
      return makeClaim();
    case "viewClaim":
      return viewClaim();
    case "invalidator":
      return invalidator();
    case "github":
      return github();
    case "logoIcon":
      return logoIcon();
    default:
      return null;
  }
}

function opener(className: string | undefined) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M480-134.616 313.078-301.539l43.383-43.383L480-221.384l123.539-123.538 43.383 43.383L480-134.616Zm-123.539-478L313.078-656 480-822.922 646.922-656l-43.383 43.384L480-736.155 356.461-612.616Z"></path>
    </svg>
  );
}

function closer(className: string | undefined) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M356-173.847 313.847-216 480-382.153 646.153-216 604-173.847l-124-124-124 124Zm124-404L313.847-744 356-786.153l124 124 124-124L646.153-744 480-577.847Z" />
    </svg>
  );
}

function claimLoader() {
  return (
    <svg
      version="1.1"
      id="L9"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="33.33"
      height="33.33"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
    </svg>
  );
}

function makeClaim() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" id="claim-icon">
      <path d="M252.309-180.001q-30.308 0-51.308-21t-21-51.308V-360H240v107.691q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h455.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V-360h59.999v107.691q0 30.308-21 51.308t-51.308 21H252.309ZM480-335.386 309.233-506.153l42.153-43.383 98.615 98.615v-336.001h59.998v336.001l98.615-98.615 42.153 43.383L480-335.386Z" />
    </svg>
  );
}

function viewClaim() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" id="link-icon">
      <path d="M212.309-140.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h252.305V-760H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v535.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-252.305h59.999v252.305q0 30.308-21 51.308t-51.308 21H212.309Zm176.46-206.615-42.153-42.153L717.847-760H560v-59.999h259.999V-560H760v-157.847L388.769-346.616Z" />
    </svg>
  );
}

function invalidator() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M256-213.847 213.847-256l224-224-224-224L256-746.153l224 224 224-224L746.153-704l-224 224 224 224L704-213.847l-224-224-224 224Z"></path>
    </svg>
  );
}

function github() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function logoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 151" fill="currentColor">
      <path d="M132 41.1c0-2.3-1.3-4.5-3.3-5.7L69.4 1.2c-1-.6-2.1-.9-3.3-.9-1.1 0-2.3.3-3.3.9L3.6 35.4c-2 1.2-3.3 3.3-3.3 5.7v68.5c0 2.3 1.3 4.5 3.3 5.7l59.3 34.2c2 1.2 4.5 1.2 6.5 0l59.3-34.2c2-1.2 3.3-3.3 3.3-5.7V41.1zm-11.9 62.5c0 2.7-1.4 5.2-3.7 6.5l-46.6 27.5c-1.1.7-2.4 1-3.7 1s-2.5-.3-3.7-1l-46.6-27.5c-2.3-1.3-3.7-3.8-3.7-6.5V54.1c0-1.2.6-2.4 1.7-3 1.1-.6 2.3-.6 3.4 0l8 4.7c1.9 1.1 3 3.3 4.4 5.8.3.5.5 1 .8 1.4 3.5 6.3 5.2 13 6.8 19.5 3 11.9 6 24.2 21.3 28.2 5 1.3 10.4 1.3 15.4 0 15.2-4 18.3-16.3 21.3-28.2C96.8 76 98.5 69.3 102 63c.3-.5.5-1 .8-1.4 1.3-2.5 2.5-4.6 4.4-5.8l8-4.7c1-.6 2.3-.6 3.4 0s1.7 1.7 1.7 3v49.5zM62.6 13.7c2.2-1.3 4.9-1.3 7.1 0L110 37.6c1 .6 1.6 1 1.6 2.2 0 1.2-.6 1.9-1.6 2.5l-7.7 4.6c-3.4 2-5.1 5.2-6.6 8.1l-.1.2c-.2.4-.4.7-.6 1.1-3.8 6.8-6.6 14-8.2 20.4C83.6 89.1 82.4 97.3 72 100c-1.9.5-3.9.7-5.8.7-2 0-3.9-.3-5.8-.7C50 97.3 48.7 89.1 45.6 76.6 44 70.2 41.2 63 37.4 56.2c-.2-.3-.4-.7-.6-1l-.1-.3c-1.5-2.8-3.3-6.1-6.6-8.1l-7.7-4.6c-1-.6-1.6-1.3-1.6-2.5s.6-1.6 1.6-2.2l40.2-23.8z"></path>
    </svg>
  );
}
