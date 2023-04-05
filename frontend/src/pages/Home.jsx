import BookList from "../components/BookList";
import IsLogin from "../components/IsLogin";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import SearchList from "../components/SearchList";
import SliderImage from "../components/SliderImage";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex mx-52 h-full justify-center">
        <div className="mt-20">
          <SliderImage />
          <div className="border-x border-[#D7D7D7] h-full">
            <BookList title="Top Ratings" />
            <BookList title="Recommendations" />
            <BookList title="Free Books" />
            <BookList title="Paid Books" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
