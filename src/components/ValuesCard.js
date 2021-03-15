export default function ValuesCard ({ icon, text }) {
  return (
    <div className="flex-none max-w-1/6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center py-8 space-y-6 px-4">
        <div className="flex-shrink-0">
          <img src={icon} />
        </div>
        <h1 className="text-center text-sm font-medium text-primary-blue">{ text }</h1>
      </div>
    </div>
  )
}