export default function Scroll() {
  return (
    <div className="flex flex-col fixed bottom-[86px] items-center justify-center mx-auto opacity-0 fade-in-animation left-1/2 translate-x-[-50%]">
      <span className="text-white-001 font-medium text-[14px] leading-150 mb-[10px]">
        Scroll to Explore
      </span>
      <svg
        width="34"
        height="50"
        viewBox="0 0 34 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pulse"
      >
        <path
          d="M16.2929 33.7071C16.6834 34.0976 17.3166 34.0976 17.7071 33.7071L24.0711 27.3431C24.4616 26.9526 24.4616 26.3195 24.0711 25.9289C23.6805 25.5384 23.0474 25.5384 22.6569 25.9289L17 31.5858L11.3431 25.9289C10.9526 25.5384 10.3195 25.5384 9.92893 25.9289C9.53841 26.3195 9.53841 26.9526 9.92893 27.3431L16.2929 33.7071ZM16 5V33H18V5H16Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
