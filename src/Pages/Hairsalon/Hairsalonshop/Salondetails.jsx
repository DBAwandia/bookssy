import { useLocation } from "react-router-dom";
import SalonDimage from "./SalonDImages";
// import Navbar from '../../../components/Navbar'
// import Footer from '../../../components/Footer'
// import HeroBottom from '../../../components/HomeComponents/HeroBottom'
export default function Salondetails() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      {/* main tag for salon details  */}
      <main className="pt-9 px-2 flex gap-[5%]">
        <aside className="w-[65%]">
          {/* image slides */}
          <SalonDimage images={state.images} ratings={state.ratings} reviews={state.reviews}/>
        <article className="mt-20">
            <h2 className="font-bold text-3xl font-serif text-zinc-700">{state.name}</h2>
            <p>{state.address}</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veritatis, nihil velit excepturi amet, repellendus modi odio eligendi qui quaerat aspernatur a saepe rem quae possimus iste nam. Mollitia quis consectetur saepe consequuntur explicabo veritatis. Blanditiis nihil aliquid ullam officia illo placeat, qui voluptatem enim doloremque reiciendis sit tenetur vero labore quis eum quae, officiis, magni libero ab nam! Voluptates consequuntur iusto, quas provident expedita ratione iure cupiditate aperiam quis nulla consectetur qui ex, praesentium officia delectus necessitatibus non ipsum quod laboriosam veritatis accusantium nihil quae? Soluta voluptas omnis impedit rerum magni ipsum quas itaque delectus laborum corporis, praesentium nisi voluptatibus quod non voluptatem ipsa laudantium quaerat aliquid? Cumque ad dignissimos nesciunt numquam doloribus dolorem blanditiis, rem harum eos asperiores illum. Repellendus numquam similique officiis, non ratione culpa vero incidunt ad nesciunt facere adipisci dolore ipsum quod est doloribus recusandae architecto perspiciatis et voluptates aspernatur sunt praesentium cumque? Dignissimos, est dolore dicta nihil ipsa laboriosam modi, earum esse repellat dolores assumenda deserunt! Assumenda placeat, adipisci eligendi vel obcaecati asperiores numquam atque. Labore facere ducimus tempore earum, amet in autem est delectus, laudantium quibusdam dicta ut eius, ullam sint cumque perferendis quaerat iure magnam magni! Necessitatibus debitis itaque cumque laudantium impedit ad dolorum qui asperiores sit incidunt natus ex, id quod eveniet voluptatem, deleniti eligendi molestias quis dolor illum? Numquam perferendis nisi autem.
        </article>
        </aside>

        <aside className="sticky h-screen w-[30%] ">
            <div>
                
            </div>
        </aside>
      </main>
    </>
  );
}
//    {state.id} <br /> {state.name}dff <br/> {state.address} <br /> {state.ratings} <br /> {state.reviews} {state.aboutUs}
//    <img src={state.images[0]} alt="" />
