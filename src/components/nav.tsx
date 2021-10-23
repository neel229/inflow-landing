const Nav = (): JSX.Element => {
  return (
    <header className="px-60 py-6 flex justify-end items-center">
      <svg
        width="35"
        height="35"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer mr-auto"
      >
        <path
          d="M1.84998 7.49998C1.84998 7.21321 1.87134 6.93143 1.91256 6.65615L9.56374 2.23875C9.86311 2.35627 10.15 2.49861 10.4219 2.66322L3.77065 6.50332C3.73669 6.52183 3.70482 6.5449 3.67602 6.57238C3.5911 6.65308 3.54245 6.76286 3.53682 6.87658C3.53359 6.9418 3.54451 7.00831 3.57086 7.07137C3.58927 7.1157 3.6149 7.15742 3.64744 7.19458C3.67306 7.22396 3.702 7.24941 3.73337 7.27069L7.32533 9.83813L3.87232 11.8317C2.63604 10.7953 1.84998 9.23944 1.84998 7.49998ZM8.36843 10.2751C8.37682 10.2706 8.38509 10.2659 8.39322 10.2608L9.84091 9.42499C9.84706 9.42163 9.85314 9.41812 9.85915 9.41446L11.3101 8.57677C11.3655 8.54649 11.4154 8.504 11.4554 8.44995C11.6034 8.25031 11.5616 7.96848 11.362 7.82046L7.82779 5.20017L11.2161 3.24393C12.4013 4.27963 13.15 5.80237 13.15 7.49998C13.15 7.83546 13.1207 8.16411 13.0647 8.48353L5.56875 12.8113C5.26138 12.6995 4.96646 12.5618 4.68662 12.4008L8.36843 10.2751ZM8.18149 9.34383L4.81659 6.93868L5.50918 6.53881L8.80604 8.98324L8.18149 9.34383ZM6.35875 6.04832L6.97822 5.69067L10.2751 8.13506L9.6556 8.49275L6.35875 6.04832ZM8.3318 1.91078L2.24263 5.42636C3.06941 3.33188 5.11164 1.84998 7.49998 1.84998C7.78258 1.84998 8.06033 1.87072 8.3318 1.91078ZM6.84684 13.1126C7.06114 13.1373 7.27908 13.15 7.49998 13.15C9.8246 13.15 11.8213 11.7461 12.6886 9.7399L6.84684 13.1126ZM7.49998 0.849976C3.82728 0.849976 0.849976 3.82728 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          data-darkreader-inline-fill=""
        ></path>
      </svg>
      <ul>
        <li className="inline-block px-3 text-xl">
          <a href="/#">Features</a>
        </li>
        <li className="inline-block px-2 text-xl">
          <a href="/#">Blogs</a>
        </li>
      </ul>
      <button
        type="button"
        className="inline-flex items-center border-gradient-br-crimson-violet-gray-900 border-transparent border-solid border-2 rounded-xl text-gray-100 text-lg bg-transparent ml-4 px-3 py-2"
      >
        Join Waitlist
      </button>
    </header>
  );
};

export default Nav;
