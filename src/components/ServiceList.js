import ServiceItem from './ServiceItem'

export default function ServiceList ({ services }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 xl:gap-16 w-full">
      {services.map((service, i) => <ServiceItem key={i} {...service} />)}
    </div>
  )
}