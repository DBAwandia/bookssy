import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function SalonDsidebar() {
    const defaultProps = {
    center: {
    lat:  1.2864,
    lng:   36.8172
    },
    zoom: 11
};
    return (
        <>
        <br />
    <div style={{ height: '280px', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    <br />
        </>
    )
}