import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SalonDsidebar(props) {
    const defaultProps = {
    center: {
    lat:  40.650002,
    lng: -73.949997
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
          lat={40.650002}
          lng={-73.949997}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    <br />
    <div>
        <h2>About Us</h2>
        <p>{props.aboutUs}</p>
    </div>
        </>
    )
}