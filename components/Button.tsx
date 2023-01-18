const Button = ({ children, ...props }) => (
  <button
    className="appearance-none px-1 py-2 bg-slate-500 border-r-4 cursor-pointer hover:bg-slate-600 hover:text-cyan-600 active:shadow-sm focus:shadow-sm"
    {...props}
  >
    {children}
  </button>
)

export default Button
