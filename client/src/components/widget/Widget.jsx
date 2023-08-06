import Card from "components/card";
import { useNavigate } from "react-router-dom";

const Widget = ({ icon, title, subtitle, pathname }) => {
  const navigate = useNavigate();

  return (
    <Card extra="!flex-row flex-grow items-center cursor-pointer rounded-[20px]">
      <div
        onClick={() => navigate(`${pathname}`)}
        className=" ml-[18px] flex h-[90px] w-auto flex-row items-center"
      >
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-lg font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
