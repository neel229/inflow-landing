const Features = (): JSX.Element => {
  return (
    <section className="px-60">
      <div className="flex flex-col align-middle">
        <strong className="text-center text-4xl p-4">Key Features</strong>
        <div
          className="w-full rounded-2xl m-4 grid grid-cols-2 gap-4 p-8"
          style={{background: '#121212'}}
        >
          <div className="flex p-4 items-center max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span className="px-4 text-xl">
              Only pay for courses that you purhcase
            </span>
          </div>
          <div className="flex p-4 items-center max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 64 64"
              style={{fill: 'white'}}
            >
              {' '}
              <path d="M 32 1.0371094 C 31.65375 1.0371094 31.308359 1.1948125 31.130859 1.5078125 L 14.130859 31.507812 C 14.12316 31.521389 14.124186 31.537002 14.117188 31.550781 C 14.07389 31.635676 14.043093 31.724991 14.025391 31.820312 C 14.02035 31.847518 14.012509 31.873056 14.009766 31.900391 C 14.008407 31.91376 14.002775 31.925968 14.001953 31.939453 C 13.996013 32.037197 14.007831 32.131943 14.029297 32.224609 C 14.033678 32.24359 14.041398 32.260599 14.046875 32.279297 C 14.073736 32.370865 14.112675 32.457025 14.164062 32.537109 C 14.178858 32.560268 14.194158 32.581516 14.210938 32.603516 C 14.280447 32.694607 14.361421 32.777845 14.460938 32.841797 L 31.460938 43.751953 C 31.47156 43.758713 31.483342 43.76125 31.494141 43.767578 C 31.503907 43.773371 31.511481 43.781625 31.521484 43.787109 C 31.565925 43.811268 31.613294 43.824781 31.660156 43.841797 C 31.685373 43.850962 31.708662 43.864016 31.734375 43.871094 C 31.821271 43.895031 31.910555 43.908203 32 43.908203 C 32.188 43.908203 32.375062 43.856953 32.539062 43.751953 L 49.539062 32.841797 C 49.615312 32.792797 49.683234 32.735484 49.742188 32.669922 C 49.760538 32.649575 49.772514 32.625203 49.789062 32.603516 C 49.806207 32.581037 49.820865 32.558843 49.835938 32.535156 C 49.888014 32.453709 49.928357 32.366664 49.955078 32.273438 C 49.959518 32.257929 49.967015 32.244217 49.970703 32.228516 C 49.971001 32.227246 49.97041 32.22588 49.970703 32.224609 C 49.97229 32.217756 49.977072 32.211972 49.978516 32.205078 C 49.996594 32.118766 50.003547 32.029953 49.998047 31.939453 C 49.997225 31.925968 49.991593 31.91376 49.990234 31.900391 C 49.987431 31.872456 49.979813 31.846158 49.974609 31.818359 C 49.956571 31.72226 49.924903 31.632308 49.880859 31.546875 C 49.87447 31.534431 49.876103 31.52009 49.869141 31.507812 L 32.869141 1.5078125 C 32.691641 1.1948125 32.34625 1.0371094 32 1.0371094 z M 32 4.0273438 L 46.552734 29.712891 L 32.433594 22.917969 C 32.359905 22.882339 32.281833 22.856239 32.203125 22.839844 C 32.173211 22.833543 32.143462 22.83358 32.113281 22.830078 C 32.067611 22.824837 32.022483 22.81923 31.976562 22.820312 C 31.939056 22.821194 31.902403 22.826915 31.865234 22.832031 C 31.823633 22.837717 31.782982 22.844524 31.742188 22.855469 C 31.702626 22.866104 31.665218 22.880929 31.626953 22.896484 C 31.607059 22.904529 31.58587 22.908592 31.566406 22.917969 L 17.443359 29.714844 L 32 4.0273438 z M 31 25.408203 L 31 41.078125 L 17.046875 32.125 L 31 25.408203 z M 33 25.408203 L 46.953125 32.125 L 33 41.078125 L 33 25.408203 z M 1 32 C 0.448 32 0 32.447 0 33 L 0 35 C 0 35.553 0.448 36 1 36 C 1.552 36 2 35.553 2 35 L 2 33 C 2 32.447 1.552 32 1 32 z M 6 32 C 5.448 32 5 32.447 5 33 L 5 35 C 5 35.553 5.448 36 6 36 C 6.552 36 7 35.553 7 35 L 7 33 C 7 32.447 6.552 32 6 32 z M 11 32 C 10.448 32 10 32.447 10 33 L 10 35 C 10 35.553 10.448 36 11 36 C 11.552 36 12 35.553 12 35 L 12 33 C 12 32.447 11.552 32 11 32 z M 53 32 C 52.447 32 52 32.447 52 33 L 52 35 C 52 35.553 52.447 36 53 36 C 53.553 36 54 35.553 54 35 L 54 33 C 54 32.447 53.553 32 53 32 z M 58 32 C 57.447 32 57 32.447 57 33 L 57 35 C 57 35.553 57.447 36 58 36 C 58.553 36 59 35.553 59 35 L 59 33 C 59 32.447 58.553 32 58 32 z M 63 32 C 62.447 32 62 32.447 62 33 L 62 35 C 62 35.553 62.447 36 63 36 C 63.553 36 64 35.553 64 35 L 64 33 C 64 32.447 63.553 32 63 32 z M 14.886719 36.097656 C 14.663969 36.123281 14.449203 36.222578 14.283203 36.392578 C 13.952203 36.733578 13.905828 37.261297 14.173828 37.654297 L 31.173828 62.5625 C 31.177247 62.567536 31.182046 62.571212 31.185547 62.576172 C 31.201949 62.599359 31.22387 62.616951 31.242188 62.638672 C 31.286321 62.691114 31.333637 62.739514 31.386719 62.78125 C 31.410808 62.80018 31.435031 62.817252 31.460938 62.833984 C 31.525482 62.875794 31.593487 62.909606 31.666016 62.935547 C 31.679972 62.940533 31.690807 62.950684 31.705078 62.955078 C 31.711548 62.957079 31.718115 62.957117 31.724609 62.958984 C 31.81348 62.984536 31.905139 63 32 63 C 32.163509 63 32.321852 62.960184 32.462891 62.886719 C 32.462891 62.886719 32.464844 62.884766 32.464844 62.884766 C 32.464844 62.884766 32.466797 62.884766 32.466797 62.884766 C 32.536993 62.847814 32.602281 62.802754 32.662109 62.75 C 32.662109 62.75 32.664062 62.748047 32.664062 62.748047 C 32.724438 62.694516 32.779672 62.632453 32.826172 62.564453 L 49.826172 37.65625 C 49.826172 37.65625 49.826172 37.654297 49.826172 37.654297 C 49.892827 37.556553 49.940418 37.451195 49.96875 37.341797 C 49.96875 37.341797 49.96875 37.339844 49.96875 37.339844 C 49.997031 37.229844 50.005719 37.117609 49.996094 37.005859 C 49.976844 36.782359 49.882797 36.565031 49.716797 36.394531 C 49.551297 36.224031 49.336281 36.123406 49.113281 36.097656 C 48.890281 36.071906 48.660438 36.119547 48.460938 36.248047 L 32 46.8125 L 15.539062 36.248047 C 15.339062 36.120547 15.109469 36.072031 14.886719 36.097656 z M 18.597656 40.587891 L 31 48.546875 L 31 58.761719 L 18.597656 40.587891 z M 45.402344 40.587891 L 33 58.761719 L 33 48.546875 L 45.402344 40.587891 z"></path>
            </svg>
            <span className="px-4 text-xl">Pay using your favorite cryptocurrencies</span>
          </div>
          <div className="flex p-4 items-center max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
            <span className="px-4 text-xl">
              Successfully complete a course to earn rewards
            </span>
          </div>
          <div className="flex p-4 items-center max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="50"
              width="50"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="px-4 text-xl">
              Community driven platform using blockchain governance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;