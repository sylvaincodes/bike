
export const Grid = ({ className,children }: { className?: string;children: React.ReactNode }) => {
    return (
      <div className={`grid ${ className }`}>
          {children}
      </div>
    )
  }
  