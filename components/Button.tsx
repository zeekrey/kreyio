const Button = ({ children, ...props }) => (
  <button
    className="cursor-pointer appearance-none rounded-md px-1 py-2 hover:bg-zinc-800 hover:text-zinc-400 focus:shadow-sm active:shadow-sm"
    {...props}
  >
    {children}
  </button>
)

export default Button
