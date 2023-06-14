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
    <div style={{ height: '150px', width: '100%'}}>
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
    <div className=''>
        <h2 className=' font-sans font-semibold text-sm uppercase'>About Us</h2>
        <br />
        <p className='mb-6 text-gray-600 text-xs'>{props.aboutUs}</p>
        <h2 className=' font-sans font-semibold text-sm uppercase'>Staffers</h2>
        <br />
        <div className='flex justify-between px-1'>
            <div>
            <div><i className="fa-regular fa-user"></i></div>
            <p>Luticia </p>
            </div>
            <div>
            <div><i className="fa-regular fa-user"></i></div>
            <p>Michelle</p>
            </div>
        </div>
    </div>
        </>
    )
}