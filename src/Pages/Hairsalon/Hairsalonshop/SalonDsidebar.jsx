import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SalonDsidebar(props) {
  const defaultProps = {
    center: {
      lat: 40.650002,
      lng: -73.949997,
    },
    zoom: 11,
  };
  return (
    <>
      <br />
      <div style={{ height: "150px", width: "100%" }}>
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
      <div className="">
        <h2 className=" font-sans font-semibold text-sm uppercase">About Us</h2>
        <br />
        <p className="mb-6 text-gray-600 text-xs">{props.aboutUs}</p>
        <h2 className=" font-sans font-semibold text-sm uppercase">Staffers</h2>
        <br />
        <hr />
        <div className="flex  px-9 gap-10">
          <div>
            <div className=" shadow-2xl p-5 rounded-full">
              <i className="fa-regular fa-user text-2xl"></i>
            </div>
            <p className="text-center mt-2">Luticia </p>
          </div>
          <div>
            <div className=" shadow-2xl p-5 rounded-full">
              <i className="fa-regular fa-user text-2xl"></i>
            </div>
            <p className="text-center mt-2">Michelle</p>
          </div>
        </div>
        <hr />
        <br />
        <h2 className=" font-sans font-semibold text-sm uppercase">
          Contact & Business Hours
        </h2>
        <hr />
        <br />
        <div className="flex justify-between px-1">
          <div>
            <i className="fa-solid fa-phone fa-flip mt-4"></i>
            <span>(312) 685-2038</span>
          </div>
          <div className="border py-2 px-5 rounded">
            <a href="tel:3126852038">Call</a>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <ul className="flex justify-between px-1">
          <li>Sunday</li>
          <li>10:00 AM - 04:00 PM</li>
        </ul>
        <br />
        <ul className="flex justify-between px-1">
          <li>Monday</li>
          <li>8:30 AM - 03:00 PM</li>
        </ul>
        <br />
        <ul className="flex justify-between px-1">
          <li>Tuesday</li>
          <li>8:30 AM - 03:00 PM</li>
        </ul>
        <br />
        <ul className="flex justify-between px-1">
          <li>Wednesday</li>
          <li>8:30 AM - 03:00 PM</li>
        </ul>
        <br />
        <ul className="flex justify-between px-1">
          <li>Thursday</li>
          <li>8:30 AM - 03:00 PM</li>
        </ul>
        <br />
        <ul className="flex justify-between px-1">
          <li>Friday</li>
          <li>8:30 AM - 03:00 PM</li>
        </ul>
        <br />
        <ul className="flex justify-between px-1">
          <li>Saturday</li>
          <li>8:30 AM - 03:00 PM</li>
        </ul>
        <br /><br />
        <h2 className=" font-sans font-semibold text-sm uppercase">Social media & share</h2>
        <hr />
        <div className="pt-7 flex justify-center gap-4">
            <div >
                <i class="fa-brands fa-instagram fa-spin  bg-[#c2c2c2] py-1 px-2 rounded-full text-2xl"></i>
                <h2 className="text-center text-xs text-gray-500">Instagram</h2>
            </div>
            <div>
                <i className="fa-solid fa-globe fa-spin bg-[#c2c2c2] py-1 px-2 rounded-full text-2xl"></i>
                <h2 className="text-center text-xs text-gray-500">Website</h2>
            </div>
            <div>
                <i className="fa-regular fa-share-from-square fa-flip bg-[#c2c2c2] py-1 px-2 rounded-full text-2xl"></i>
                <h2 className="text-center text-xs text-gray-500">Share</h2>
            </div>
        </div>
      </div>
      <br />
    </>
  );
}
