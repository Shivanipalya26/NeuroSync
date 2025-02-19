import * as T from "../../styles/typography/index";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  logo?: React.ReactNode;
  image?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  description,
  logo,
  image,
}) => {
  return (
    <div className={`bg-gray-200 rounded-3xl p-4 w-auto m-2 ${className}`}>
      <div className="text-gray-400 pb-5">{logo}</div>
      <div className="text-left">
        <T.H5 className=" pb-2">{title}</T.H5>
        <T.H6 className="text-gray-600">{description}</T.H6>
      </div>
      <div>
        {image && (
          <img
            src={`/images/${image}`}
            alt="Card Image"
            className="mt-4 rounded-lg"
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
