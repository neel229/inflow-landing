const Timeline = (): JSX.Element => {
  return (
    <div className="container bg-transparent mx-auto w-full h-full flex flex-col">
      <strong className="text-4xl text-center m-4">Roadmap</strong>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{left: '50%'}}
        ></div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-green-400 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white"></h1>
          </div>
          <div className="order-1 bg-purple-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              MVP Release
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              The initial launch of the platform will only include
              buying/selling of courses using cryptocurrencies. This will help
              in building an initial structure for the future of the platform
              and more importantly, validation of the product.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg"></h1>
          </div>
          <div className="order-1 bg-purple-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-black text-xl">Token Launch</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
              A platform-specific token will be launced during this phase. This
              token will be used as a rewarding system (similar to AmazonPay
              credits). Further, in future phases, token holders can participate
              in platform governance.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white"></h1>
          </div>
          <div className="order-1 bg-purple-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-black text-xl">
              Governance Protocol
            </h3>
            <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">
              Platform governance will be fully driven by token holders.
              New/change in features can be applied via feature polls.
              <br />
              (See Uniswap Poll mechanism for reference.)
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg"></h1>
          </div>
          <div className="order-1 bg-purple-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-black text-xl">
              Content Format Expansion
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
              Support for other content formats other than video. Community
              governance will decide which features to roll out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
