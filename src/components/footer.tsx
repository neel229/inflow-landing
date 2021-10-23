const Footer = (): JSX.Element => {
  return (
    <div className="px-60 border border-t-gray-800 border-b-0 border-l-0 border-r-0">
      <div className="mt-14 flex flex-col justify-center ">
        <strong className="text-center text-5xl">Inflow</strong>
        <div className="flex items-center justify-center">
          <span className="text-center p-2">
          Copyright&copy; 2021, Inflow Labs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
