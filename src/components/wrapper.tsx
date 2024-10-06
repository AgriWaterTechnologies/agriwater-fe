export default function Wrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen">
      {children}
    </div>
  )
}