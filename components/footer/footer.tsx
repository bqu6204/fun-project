const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-auto lg:bg-none">
      <a
        className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://bqu6204.github.io/react_personal_website/"
        target="_blank"
        rel="noopener noreferrer"
      >
        By <b className="underline">ESONG</b>
      </a>
    </footer>
  );
};

export default Footer;
