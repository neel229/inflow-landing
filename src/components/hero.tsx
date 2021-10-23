const Hero = (): JSX.Element => {
  return (
    <section className="px-60">
      <div className="flex flex-col items-start align-middle my-28">
        <strong className="max-w-prose text-6xl">
          Marketplace For Knowledge Sharing
        </strong>
        <span className="py-3 text-2xl">
          Powered By{' '}
          <span className="text-purple-500 cursor-pointer">Polygon</span>
        </span>
        <span className="mt-16 text-xl max-w-prose text-justify">
          At Inflow, our main goal is to create the next generation knowledge
          sharing marketplace. We want it to be fully transparent and for that
          we will be using Polygon as the payment gateway. We want people from
          all around the world to come, join our platform and share their
          knowledge. Moreover, we want to reward learners who are putting their
          precious time to pick up new skills.
          <br />
          <br />
          <strong>Come join us and be a part of the movement!</strong>
          <form className="flex my-4 py-2 max-w-lg border-2 rounded-md border-gray-900" style={{background: "#121212"}}>
            <input
              type="email"
              className="flex-grow px-2 border-none focus:outline-none bg-transparent"
              placeholder="work email"
            />
            <button className="m-1 py-2 px-3 rounded-md bg-purple-800" >
              <strong>Stay Updated</strong>
            </button>
          </form>
        </span>
      </div>
    </section>
  );
};

export default Hero;
