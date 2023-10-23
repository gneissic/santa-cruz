import { Fragment } from "react";

const CollectionsNav = (props) => {
  return (
    <Fragment>
      <div className="flex justify-center gap-2 pt-3 font-pops text-sm">
        <p>Home</p>
        <p>/</p>
        <p>{props.page}</p>
        <p>/</p>
        <p>{props.child}</p>
      </div>
      <div className="text-center pt-3 text-3xl font-bold font-pops tracking-wide">
        <p>{props.title}</p>
      </div>
    </Fragment>
  );
};

export default CollectionsNav;
