import React from "react";
import Image from "next/image";

function Profile() {
  return (
    <div className="flex flex-wrap flex-row p-2 justify-between ">
      <div className="m-1 p-5 flex-1 max-w-[80%] min-w-[300px]">
        <h3 className="my-5">
          <span className="text-3xl font-semibold">Hi👋</span>
          <span className="text-3xl text-blue-800  font-nerkoOne">{`I'm Badr Gharib`}</span>
        </h3>
        <p className="leading-7 mt-5 font-coolvetica">
          Technical Lead Frontend Developer (React, Redux)with more than 5 years
          of experience as frontend developer and more than 10 years as software
          engineer in general, who can Design and develop quality, secure, easy
          to use and high-performance solutions. Troubleshoot and resolve
          customer issues. Review and provide detailed feedback on peer design
          and source code
        </p>
      </div>
      <Image
        src="/imgs/welcome.svg"
        className="flex-1 w-[100%] m-1 max-w-[22%]"
        alt="Badr Gharib"
        width={300}
        height={300}
      />
    </div>
  );
}

export default Profile;
