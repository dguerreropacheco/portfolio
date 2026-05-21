export default function Social() {
  return (
    <div className="absolute left-4 md:left-20 top-1/2 translate-y-[-97px]">
      <div className="flex flex-col gap-4">
        <a
          href="https://linkedin.com/in/diana-guerrero-ing"
          target="_blank"
          className="text"
        >
          LINKEDIN
        </a>

        <a
          href="https://github.com/dguerreropacheco"
          target="_blank"
          className="text"
        >
          GITHUB
        </a>

        <a href="mailto:dguerreropacheco@gmail.com" className="text">
          GMAIL
        </a>

        <a href="/CV DIANA GUERRERO PACHECO.pdf" download className="text">
          CV
        </a>
      </div>
    </div>
  );
}
