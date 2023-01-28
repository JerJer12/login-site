import { FixedSizeList as List } from "react-window";
import { AutoSizer } from "react-virtualized";
import { InfiniteLoader } from "react-window-infinite-loader";

const Row = ({ index, style }) => (
    <div style={style}>Row {index}</div>
  );
   

export default () => {
    <AutoSizer>
        {({height, width}) => (

            <List
            className="List"
            height={height}
            itemCount={1000}
            itemSize={30}
            width={width}
            >
            {Row}

            </List>
        )}
    </AutoSizer>

}