export default function Codesandbox({ src, className }) {
  return (
    <iframe
      src={`${src}?view=split&theme=light`}
      className={className}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
