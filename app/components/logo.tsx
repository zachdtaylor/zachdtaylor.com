type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3 -3 18 18"
      className={className}
    >
      <polygon
        points="9.59,-.41 -.41,9.59 2.41,12.41 12.41,2.41"
        className="fill-current text-purple-600"
      />
      <circle cx="1" cy="1" r="2" className="fill-current text-purple-600" />
      <circle cx="11" cy="1" r="2" className="fill-current text-purple-700" />
      <circle cx="1" cy="11" r="2" className="fill-current text-purple-700" />
      <circle cx="11" cy="11" r="2" className="fill-current text-purple-600" />
      <polygon
        points="1,-1 11,-1 11,3 1,3"
        className="fill-current text-purple-700"
      />
      <polygon
        points="1,9 11,9 11,13 1,13"
        className="fill-current text-purple-700"
      />
    </svg>
  );
}
