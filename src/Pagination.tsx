import { HTMLAttributes, ReactElement, JSX, ElementType, ButtonHTMLAttributes } from "react";
import usePagination from "./usePagination";
import PageNavigation from "./pageNavigation";

interface PaginationProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, "className" | "wrapperClassName"> {
  data: T[];
  renderItem: (item: T) => ReactElement;
  pageSize?: number;
  navigationClassName?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  nextButtonClassName?: string;
  previousButtonClassName?: string;
  nextButtonLabel?: string;
  previousButtonLabel?: string;
  wrapperClassName?: string;
  className?: string;
  as?: ElementType;
  buttonProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;
}
const Pagination = <T,>({
  data,
  renderItem,
  pageSize = 10,
  navigationClassName = "navigation",
  buttonClassName = "button",
  activeButtonClassName = "active",
  nextButtonClassName = "next",
  previousButtonClassName = "previous",
  nextButtonLabel = "Next",
  previousButtonLabel = "Previous",
  wrapperClassName = "pagination-wrapper",
  className = "pagination",
  as: As = "div",
  buttonProps,
  ...props
}: PaginationProps<T>) => {
  const { currentPage, setCurrentPage, numberOfPages, pages, paginatedData } = usePagination(
    data,
    pageSize,
  );

  const element = document.createElement(As as string);
  const validProps = Object.entries(props).reduce((acc, [key, value]) => {
    if (key in element) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, unknown>);

  return (
    <div {...validProps} className={wrapperClassName}>
      <As className={className}>{paginatedData.map((item: T) => renderItem(item))}</As>
      <PageNavigation
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        pages={pages}
        setCurrentPage={setCurrentPage}
        className={navigationClassName}
        buttonClassName={buttonClassName}
        activeButtonClassName={activeButtonClassName}
        nextButtonClassName={nextButtonClassName}
        previousButtonClassName={previousButtonClassName}
        nextButtonLabel={nextButtonLabel}
        previousButtonLabel={previousButtonLabel}
        buttonProps={buttonProps}
      />
    </div>
  );
};

export default Pagination;
