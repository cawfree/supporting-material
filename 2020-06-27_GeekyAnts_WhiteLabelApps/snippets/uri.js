export default `
import UriBox, {LookUpTable} from "react-native-uri-box";
import Video from "react-native-video";

const App = () => (
  <UriBox
    style={{
      flex: 1,
    }}
    source={{uri: 'http://www.cawfree.com/mapsy/img/mapsy.jpg'}}
    LookUpTable={{
      ...LookUpTable,
      ['video/mp4']: ({ ...extraProps }) => (
        <Video
          {...extraProps}
          resizeMode="cover"
          loop
          muted
        />
      ),
    }}
  />
);
`.trim();
