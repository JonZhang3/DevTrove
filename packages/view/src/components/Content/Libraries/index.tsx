import { Grid } from "@radix-ui/themes";
import ItemCard from "./ItemCard";
// import Toolbar from "./Toolbar";
import SideBar from "./SideBar";
import { useData } from "@/store";

export default function Content() {
  const searchData = useData((state) => state.searchData);
  const selectTag = useData((state) => state.selectTag);
  const sideBarWidth = 250;

  return (
    <div className="flex-1 p-4 overflow-auto relative">
      <div className="flex gap-3 flex-row w-[80%] mx-auto relative">
        <SideBar width={sideBarWidth + "px"} className="h-full fixed" />
        <div
          className="flex-1"
          style={{ paddingLeft: `${sideBarWidth + 22}px` }}
        >
          <Grid
            columns={{
              xl: "3",
              lg: "2",
              md: "1",
            }}
            gap="5"
          >
            {searchData.map((item, index) => (
              <ItemCard
                item={item}
                key={index + item.name}
                onTagClick={(tag) => selectTag(tag)}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
