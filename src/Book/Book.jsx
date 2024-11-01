import { IoIosStar } from "react-icons/io";

const Book = ({ book }) => {
  const { id, name, image, author, totalPages, rating, category } = book;
  return (
    <div>
      <div className="card bg-base-100 border border-slate-200 p-6">
        <figure className="h-[290px] rounded-lg">
          <img className="h-full w-full"
            src={image}
            alt="Books"
          />
        </figure>
        <div className="mt-3 ">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="font-serif mt-3">Author : {author}</p>
          <p className="mt-2">Pages: {totalPages}</p>
          <hr className="my-3"></hr>
           <div className="flex justify-between items-center text-[18px]">
            <p className="text-lg font-semibold">{category}</p>
            <div className="flex items-center gap-2">
            <p className="text-yellow-500"><IoIosStar /></p>
            <p>{rating}</p>
            </div>
           </div>

          <div className="card-actions mt-4">
            

            <button className="btn bg-[#59C6D2] ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
