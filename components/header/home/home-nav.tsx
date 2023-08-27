const HomeNav: React.FC = () => {
  return (
    <div className="lg:flex items-center justify-between lg:px-24 lg:pb-24 pt-24 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
        <p className="fixed z-10 bg-gray-200 bg-opacity-30 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-3xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          A Collection Of
          <code className="font-mono font-bold">
            &nbsp;interesting questions
          </code>
        </p>
      </div>

      <div className="flex w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://bqu6204.github.io/react_personal_website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By <b className="underline">ESONG</b>
        </a>
      </div>
    </div>
  );
};

export default HomeNav;
