import { FC } from "react";
import clsx from "clsx";

import Pagination from "@/components/base/Pagination/Pagination";
import SinglesList from "./SinglesItems/SinglesList";

import { ISingles } from "@/interfaces/music.interface";

interface SinglesProps {
  className?: string;
  singles: ISingles;
}

const Singles: FC<SinglesProps> = ({
  className,
  singles: { singles, maxPageID },
}) => {
  return (
    <div className={clsx(className, "singles")}>
      <div className="singles__container">
        <SinglesList singles={singles} />
        <Pagination
          className="singles__pagination"
          itemsPerTotal={singles}
          pageCount={maxPageID}
        />
      </div>
    </div>
  );
};

export default Singles;
