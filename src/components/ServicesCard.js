export default function ServicesCard ({ icon, text }) {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center max-w-md rounded-lg shadow-lg py-8 space-y-6 px-4">
      <div className="flex-shrink-0">
        <img src={ icon } className="w-24 md:w-36" />
      </div>
      <h1 className="text-center text-sm md:text-lg font-medium text-primary-blue px-0 sm:px-12 ">{ text }</h1>
    </div>
  )
}