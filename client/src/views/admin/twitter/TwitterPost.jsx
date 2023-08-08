// import 'card.css'
import {Params} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import CheckTable from '../default/components/CheckTable.jsx';
import tableDataCheck from '../default/variables/tableDataCheck.js';
import {columnsDataCheck} from '../default/variables/columnsData.js';

const TwitterPost = () => {
  const {id} = useParams();

  return (
    <>
    <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-[50px]">
      {/* <!--Card 1--> */}
      <div className="overflow-hidden rounded shadow-lg ">
        {/* <img className="w-full" src="/mountain.jpg" alt="Mountain"> */}
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Mountain</div>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #photography
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #travel
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
      {/* <!--Card 2--> */}
      <div className="overflow-hidden rounded shadow-lg">
        {/* <img className="w-full" src="/river.jpg" alt="River"> */}
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">River</div>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #photography
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #travel
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #summer
          </span>
        </div>
      </div>

      {/* <!--Card 3--> */}
    </div>
     <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
     {/* Check Table */}
     <div>
       <CheckTable
         columnsData={columnsDataCheck}
         tableData={tableDataCheck}
       />
     </div>
     </div>
     </>
  );
};

export default TwitterPost;
