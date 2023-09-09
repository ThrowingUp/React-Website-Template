const Card = ({ data }) => {
    return (
      <div className="m-w-33%">
        <img src={data.img} alt={data.title} className="w-full h-48 object-cover rounded-t-md" />
        <div>
          <h2 className="mt-4 text-gray-800 text-2xl leading-8 font-semibold">{data.title}</h2>
          <h3 className="mt-2 text-gray-700 text-lg leading-7 font-medium">{data.subtite}</h3>
          <p className="mt-2 text-sm leading-5 font-normal">{data.text}</p>
          <div className="mt-2 flex flex-wrap gap-1 text-sm leading-4 font-medium text-purple-500 ">
            {data.tags.map((tag, index) => (
              <span key={index} className="py-1 px-2 flex justify-center gap-2 rounded-3xl bg-purple-100">
                  <a href={`/${tag.slug}`} className="hover:underline whitespace-nowrap">
                      {tag.name}
                  </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Card