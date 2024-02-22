import { DarkTheme } from "./DarkTheme";
import Gallery from "./Gallery";
import Search from "./Search";
import { AppProvider } from "./utlis/Context";

const App = () => {
  return (
    <>
      <DarkTheme />
      <Search />
      <Gallery />
    </>
  );
};
export default App;
