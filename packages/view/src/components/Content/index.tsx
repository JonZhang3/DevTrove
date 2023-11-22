import { Grid } from "@radix-ui/themes";
import ItemCard from "./ItemCard";
import { useData } from "@/store";

export default function Content() {
  const searchData = useData((state) => state.searchData);
  const selectTag = useData((state) => state.selectTag);

  return (
    <div className="flex-1 overflow-auto p-4">
      <Grid columns="4" gap="5" className="w-[80%] mx-auto">
        {searchData.map((item, index) => (
          <ItemCard
            item={item}
            key={index}
            onTagClick={(tag) => selectTag(tag)}
          />
        ))}
      </Grid>
    </div>
  );
}
