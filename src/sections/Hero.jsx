export const Hero=()=>{
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img src="/b1.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-35 "/>
            <div className="absolute inset-0 bg-gradient-to-b 
  from-[rgb(15,20,24)/0.4] 
  via-[rgb(15,20,24)/0.9] 
  to-[rgb(15,20,24)]"/>
        </div>
    </section>
    )
}