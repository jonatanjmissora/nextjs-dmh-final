
export const SubmitForm = ({
  text,
  isLoading,
}: {
  text: string;
  isLoading?: boolean;
}) => {
  return (
    <button
      className={`button-form mt-6 ${isLoading && 'opacity-75'}`}
      type="submit"
      disabled={isLoading}
    >
      {text}
    </button>
  );
};
