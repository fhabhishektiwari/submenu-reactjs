import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main">
      <Sidebar/>
      <div className="container">
        <h1 className="title">React Js App</h1>
        <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima, amet eos exercitationem eius, repellat reprehenderit aspernatur illum labore sapiente sed vero dolor officiis itaque minus ea consequuntur accusamus totam impedit dolorem cumque perspiciatis ipsam aperiam doloribus. Perspiciatis, delectus dolorum quia impedit expedita, ipsum quasi ea quam, animi voluptate nihil suscipit necessitatibus! Laboriosam commodi cupiditate mollitia ad quas adipisci voluptatem.</p>
        <button className="btn">Explore Now</button>
      </div>

    </div>
  );
}

export default App;
