import React from "react";
import TextAndImages from "../TextAndImages";

import Appointments from "../../assets/Appointments.png";
import BookWithBooksy from "../../assets/BookWithBooksy.png";
import SomethingCameUp from "../../assets/SomethingCameUp.png";

export default function SpecsContent() {
  return (
    <section className="w-full py-10 px-20">
      <TextAndImages
        title={"Appointments done better"}
        text1={
          "Looking for your next appointment with a local barber, hair stylist, massage therapist or nail artist? Need appointment booking for a beard trim, an eyebrow wax, or a deep tissue massage?"
        }
        text2={
          "Booksy is a free beauty scheduling app and makes appointments easy to find and book within seconds. No more phone tag. Book anytime, from anywhere, 24/7."
        }
        text3={
          "Discover top businesses in your area and book instantly with Booksy."
        }
        reverse={false}
        image={Appointments}
      />

      <TextAndImages
        title={"Something Came Up? We've Got You"}
        text1={
          "Download Booksy, a free online appointment booking app, and manage your appointments from anywhere. Reschedule or cancel without picking up the phone."
        }
        text2={
          "And because we know life gets busy, we’ll send  you reminders. You’ll never forget or miss out on another appointment."
        }
        text3={""}
        reverse={true}
        image={SomethingCameUp}
      />

      <TextAndImages
        title={"Book With The Best Near You."}
        text1={
          "Take a scroll around the block to see top health and beauty businesses on Booksy’s marketplace."
        }
        text2={
          "Check out their vibe from their business profile and hear what other people are saying with verified reviews. You can even look through their portfolio of work."
        }
        text3={
          "Save time and leave the stress to someone else. With Booksy, setting up your next beauty appointment is free and easy."
        }
        reverse={false}
        image={BookWithBooksy}
      />
    </section>
  );
}
