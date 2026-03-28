import brandWide from '../partners/sample-brand-wide.svg'
import logoSmall from '../partners/sample-logo-small.svg'
import logoMid from '../partners/sample-logo-medium.svg'
import brandLong from '../partners/sample-brand-long.svg'
import contLong from '../partners/contributor-long.svg'

const links = [
  { id: 'email',     label: 'Gmail',     link: 'mailto:dsc.haribon@gmail.com' },
  { id: 'linkedin',  label: 'LinkedIn',  link: 'https://www.linkedin.com/company/gdg-plm/' },
  { id: 'facebook',  label: 'Facebook',  link: 'https://www.facebook.com/gdg.haribon' },
  { id: 'instagram', label: 'Instagram', link: 'https://www.instagram.com/gdg_plm/' }
]

function SocialIcon({ id }: { id: string }) {
  if(id === 'email')
    return <svg className="fill-brand-sand h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 128C214 128 128 214 128 320C128 426 214 512 320 512C337.7 512 352 526.3 352 544C352 561.7 337.7 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320L576 352C576 405 533 448 480 448C450.7 448 424.4 434.8 406.8 414.1C384 435.1 353.5 448 320 448C249.3 448 192 390.7 192 320C192 249.3 249.3 192 320 192C347.9 192 373.7 200.9 394.7 216.1C400.4 211.1 407.8 208 416 208C433.7 208 448 222.3 448 240L448 352C448 369.7 462.3 384 480 384C497.7 384 512 369.7 512 352L512 320C512 214 426 128 320 128zM384 320C384 284.7 355.3 256 320 256C284.7 256 256 284.7 256 320C256 355.3 284.7 384 320 384C355.3 384 384 355.3 384 320z"/></svg>
  else if(id === 'linkedin')
    return <svg className="fill-brand-sand h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
  else if(id === 'facebook')
    return <svg className="fill-brand-sand h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>
  else if(id === 'instagram')
    return <svg className="fill-brand-sand h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
} 

const scrollToTOp = () => {
  window.scrollTo(0, 0);
}

export default function Footer() {
  return (
    <footer
      className="min-h-64 bg-[#120d05] pt-6 md:pt-10 pb-2"
    >
      {/* Footer + Registration CTA */}
      {/* content wrapper */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 grid-rows-2 gap-x-3 gap-y-10 md:gap-y-6 px-6 md:px-12">
        {/* Presented By */}
        <div className="">
          <h5 className="text-brand-gold text-center mb-4 md:mb-7">Presented By</h5>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <img src={brandWide} alt="wide brand" className="w-[50%]" />
            <img src={logoSmall} alt="small logo" className="w-[10%]" />
            <img src={logoMid} alt="mid logo" className="w-[15%]" />
            <img src={brandLong} alt="long brand" className="w-[50%]" />
          </div>
        </div>

        {/* Co-presented By */}
        <div className="">
          <h5 className="text-brand-gold text-center mb-4 md:mb-7">Co-Presented By</h5>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <img src={brandWide} alt="wide brand" className="w-[50%]" />
            <img src={logoSmall} alt="small logo" className="w-[10%]" />
            <img src={brandLong} alt="long brand" className="w-[50%]" />
          </div>
        </div>

        {/* Contributor */}
        <div className="">
          <h5 className="text-brand-gold text-center mb-4 md:mb-7">Contributor</h5>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <img src={brandWide} alt="wide brand" className="w-[50%]" />
            <img src={brandLong} alt="small logo" className="w-[50%]" />
            <img src={contLong} alt="long logo" className="w-[50%]" />
          </div>
        </div>

        {/* Official Venue Partner */}
        <div className="">
          <h5 className="text-brand-gold text-center mb-4 md:mb-7">Official Venue Partner</h5>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <img src={brandLong} alt="long brand" className="w-[50%]" />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap w-full md:col-start-2 mx-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none tracking-tight mb-3">
            <span className="text-white">Inn</span>
            <span className="text-brand-gold">O</span>
            <span className="text-white">lympics</span>
            <span className="text-brand-gold leading-tight"> 2026</span>
          </h1>
          <p className="text-brand-cream italic ">Elevate Ideas for Innovation</p>
          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex h-11 items-center rounded-full bg-brand-coral px-5 lg:px-7 text-[0.7rem] lg:text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-coral/90 active:scale-95 shadow-lg shadow-brand-coral/40 cursor-pointer">
            Register Now
            </button>
            <button
              title="Scroll Up"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-coral transition-colors duration-200 hover:bg-brand-coral/10 cursor-pointer"
              onClick={scrollToTOp}
            >
              <svg 
                className="h-5 w-5 fill-brand-coral rotate-180"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 640"
              >
                <path d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* external links */}
        <div className="w-full md:col-start-3 text-brand-sand mx-2 my-5">
          <h5 className="text-brand-gold mb-4 md:mb-7">Socials</h5>
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.link} className="flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
                  <SocialIcon id={link.id} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      {/* some Copyright */}
      <hr className="border-brand-sand/40 mt-4 w-[80vw] m-auto"></hr>
      <p className="text-brand-cream/40 text-sm text-center">&copy; Google Developer Groups PLM</p>
    </footer>
  )
}
