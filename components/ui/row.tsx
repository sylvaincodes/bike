
export const Row = ({ className,children }: { className?: string;children: React.ReactNode }) => {
  return (
    <div className={`flex items-center ${ className }`}>
        {children}
    </div>
  )
}
