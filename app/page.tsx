import CreatePostForm from "@/components/CreatePostForm";
import Navbar from "@/components/Navbar";

const contents = [
  {
    id: 1,
    title: "Hello world",
    description: "lorem100",
    image: "",
  },
  {
    id: 2,
    title: "Hello world",
    description: "lorem100",
    image: "",
  },
  {
    id: 3,
    title: "Hello world",
    description: "lorem100",
    image: "",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="w-[1024px] mx-auto mt-8 grid grid-cols-2 gap-8 items-start">
        <div className="">
          <CreatePostForm />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {contents.map(({ id, title, description }) => {
            return (
              <div className="p-4 rounded-md border border-gray-200 bg-[#fafafa]" key={id}>
                <h3>{title}</h3>
                <p className="">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
