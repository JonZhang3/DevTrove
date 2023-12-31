import { Grid } from "@radix-ui/themes";
import ItemCard from "./ItemCard";
// import Toolbar from "./Toolbar";
import SideBar from "./SideBar";
import { useData } from "@/store";
import clsx from "clsx";

export default function Content() {
  const searchData = useData((state) => state.searchData);
  const selectTag = useData((state) => state.selectTag);
  const sideBarWidth = "250px";

  return (
    <div className="flex-1 p-4 overflow-auto relative">
      <div className="flex gap-3 flex-row w-[80%] mx-auto">
        <div style={{ width: sideBarWidth }} className={clsx("h-full")}>
          <SideBar width={sideBarWidth} />
        </div>
        <div className="flex-1">
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
