import { useContext } from "react";
import { ThemeContext } from "./Layout";
export default function Codesandbox({ src, className }) {
  const theme = useContext(ThemeContext);

  return (
    <iframe
      src={`${src}?view=split&theme=${theme}`}
      className={className}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
