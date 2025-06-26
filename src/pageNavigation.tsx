import { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";

interface PageNavigationProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  currentPage: number;
  numberOfPages: number;
  pages: number[];
  setCurrentPage: (page: number) => void;
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  nextButtonClassName?: string;
  previousButtonClassName?: string;
  nextButtonLabel?: string;
  previousButtonLabel?: string;
  buttonProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;
}

const PageNavigation: FC<PageNavigationProps> = ({
  currentPage,
  numberOfPages,
  pages,
  setCurrentPage,
  className = "pagination",
  buttonClassName = "button",
  activeButtonClassName = "active",
  nextButtonClassName = "next",
  previousButtonClassName = "previous",
  nextButtonLabel = "Next",
  previousButtonLabel = "Previous",
  buttonProps = {},
  ...containerProps
}) => {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= numberOfPages) {
      setCurrentPage(page);
    }
  };

  const filteredButtonProps = Object.entries(buttonProps).reduce((acc, [key, value]) => {
    const buttonElement = document.createElement("button");
    if (key in buttonElement) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, unknown>);

  return (
    <div {...containerProps} className={className}>
      <button
        className={`${previousButtonClassName} ${buttonClassName}`}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label={previousButtonLabel}
        {...filteredButtonProps}>
        {previousButtonLabel}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`${buttonClassName}${currentPage === page ? ` ${activeButtonClassName}` : ""}`}
          onClick={() => handlePageClick(page)}
          disabled={currentPage === page}
          aria-label={page.toString()}
          {...filteredButtonProps}>
          {page}
        </button>
      ))}

      <button
        className={`${nextButtonClassName} ${buttonClassName}`}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === numberOfPages}
        aria-label={nextButtonLabel}
        {...filteredButtonProps}>
        {nextButtonLabel}
      </button>
    </div>
  );
};

export default PageNavigation;
