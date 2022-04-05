export default function Service({ heading, description, children }) {
  return (
    <div className="flex flex-col space-y-4">
      {children}
      <p className="text-2xl font-medium text-purple">{heading}</p>
      <p className="text-gray text-base">{description}</p>
    </div>
  );
}
