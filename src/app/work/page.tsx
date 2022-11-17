import React, { Suspense } from "react";
import Loading from "./loading";
import Modal from "./modal";

const Works: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="font-serif">Work</div>
      <Modal />
    </Suspense>
  );
};

export default Works;
