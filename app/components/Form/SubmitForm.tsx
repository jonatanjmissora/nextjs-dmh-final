
export const SubmitForm = ({
  text,
  isLoading,
  className
}: {
  text: string;
  isLoading?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={`button-form ${isLoading && 'opacity-75'} ${className}`}
      type="submit"
      disabled={isLoading}
    >
      {text}
    </button>
  );
};
