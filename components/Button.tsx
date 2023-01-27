const Button = ({ children, ...props }) => (
  <button
    className="appearance-none px-1 py-2 cursor-pointer rounded-md hover:bg-zinc-800 hover:text-zinc-400 active:shadow-sm focus:shadow-sm"
    {...props}
  >
    {children}
  </button>
)

export default Button
