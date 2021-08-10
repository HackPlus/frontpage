export default function CheckSvg({ color }) {
  if (color === "green") {
    return (
      <div className="rounded-full h-6 w-6 mx-auto flex items-center justify-center bg-darkgreen">
        <svg
          className="text-white h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.1206 5.4111C18.5021 4.92016 19.1753 4.86046 19.6241 5.27776C20.073 5.69506 20.1276 6.43133 19.746 6.92227L10.6794 18.5889C10.2919 19.0876 9.60523 19.1401 9.15801 18.7053L4.35802 14.0386C3.91772 13.6106 3.87806 12.8732 4.26944 12.3916C4.66082 11.91 5.33503 11.8666 5.77533 12.2947L9.76023 16.1689L18.1206 5.4111Z"></path>
        </svg>
      </div>
    );
  }
  return (
    <div className="rounded-full h-6 w-6 mx-auto flex items-center justify-center bg-bluelight">
      <svg
        className="text-blue h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.1206 5.4111C18.5021 4.92016 19.1753 4.86046 19.6241 5.27776C20.073 5.69506 20.1276 6.43133 19.746 6.92227L10.6794 18.5889C10.2919 19.0876 9.60523 19.1401 9.15801 18.7053L4.35802 14.0386C3.91772 13.6106 3.87806 12.8732 4.26944 12.3916C4.66082 11.91 5.33503 11.8666 5.77533 12.2947L9.76023 16.1689L18.1206 5.4111Z"></path>
      </svg>
    </div>
  );
}
