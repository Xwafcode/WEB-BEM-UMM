export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-display font-semibold rounded-lg transition-all duration-200 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap'

  const variants = {
    primary: 'bg-[#C0272D] text-white hover:bg-[#A01F24] focus:ring-[#C0272D] shadow-sm',
    ghost: 'border-2 border-white text-white hover:bg-white/20 focus:ring-white',
    outline: 'border-2 border-[#C0272D] text-[#C0272D] hover:bg-[#C0272D] hover:text-white focus:ring-[#C0272D]',
    white: 'bg-white text-[#C0272D] hover:bg-[#F2D5D6] focus:ring-white font-semibold',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
