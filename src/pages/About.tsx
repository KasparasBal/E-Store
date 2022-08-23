import AboutVid from "../components/AboutVId";

export default function About() {
  return (
    <>
      <div className="container mx-auto relative">
        <div className="bg-pink-600 rounded-tl-lg w-2/6 h-1/6 text-white text-5xl text-center flex justify-center items-center absolute bottom-0 right-0">
          Store
        </div>
        <AboutVid />
        <div className="container"></div>
      </div>
      <div className="container mx-auto flex items-center justify-center py-2 flex-col">
        <h2 className="text-6xl font-semibold">We Are Store.</h2>
        <p className="text-center p-2 py-10 text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          facilis odit iure perferendis sequi sapiente. Beatae excepturi
          sapiente aliquam fuga totam delectus, ullam, inventore perspiciatis
          repudiandae minima voluptate deserunt animi nisi quas laborum natus
          error maxime eius! Fugit praesentium debitis ullam enim qui vero
          aspernatur delectus, quibusdam odio? Voluptatibus, quo.
        </p>
      </div>
    </>
  );
}
