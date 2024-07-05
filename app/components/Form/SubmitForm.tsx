
export const SubmitForm = ({
  text,
  isLoading,
}: {
  text: string;
  isLoading?: boolean;
}) => {
  return (
    <button
      className={`button-form ${isLoading && 'opacity-75'}`}
      type="submit"
      disabled={isLoading}
    >
      {text}
    </button>
  );
};
