import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">FUTURE BLOG 3000</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
            libero nunc consequat interdum varius sit amet. Vitae congue eu
            consequat ac.
          </p>
          <p>© Future Blog 3000 All Rights Reserved</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">praesent tristique magna</p>
          <p className="my-5">dui vivamus arcu</p>
          <p>bibendum neque</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">lacinia at quis risus</p>
          <p>+44 7457 211480</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
