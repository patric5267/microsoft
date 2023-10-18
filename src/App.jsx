import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css'

function App() {
  return (
    <>
      <div className="phonenavbar w-full h-14 flex justify-between place-items-center md:hidden 
      ">
        <div className="dropserch flex ml-2">
          <div className="dropdown  ">
            <span className="material-symbols-outlined">
              menu
            </span>
          </div>
          <div className="searchbar ml-4">
            <span className="material-symbols-outlined">
              search
            </span>
          </div>
        </div>
        <div className="microsoftlogo mb-1">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" className=" h-5" />
        </div>
        <div className="cartprofile flex mr-2">
          <div className="cart mr-4">
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
          </div>
          <div className="profile ">
            <span className="material-symbols-outlined">
              account_circle
            </span>
          </div>
        </div>
      </div>
      <div className="lapnavbar hidden md:flex w-full h-14">
        <div className="leftnav h-full w-1/2 lg:w-3/5 text-sm  flex justify-end items-center lg:px-16 lg:justify-start ">
          <div className="microsoftimg">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" className=" h-6" />
          </div>
          <div className="pages ml-4 cursor-pointer">
            <p>Microsoft 365</p>
            <div className="hoverline bg-black w-full h-0.5 hidden">
            </div>
          </div>
          <div className="pages ml-4  cursor-pointer">
            <p>Teams</p>
            <div className="hoverline bg-black w-full h-0.5 hidden">
            </div>
          </div>
          <div className="pages ml-4 cursor-pointer">
            <p>Windows</p>
            <div className="hoverline bg-black w-full h-0.5 hidden">
            </div>
          </div>

        </div>
        <div className="rightnav h-full w-1/2 lg:w-2/5 text-sm   flex justify-center place-items-center lg:justify-center ">
          <div className="all flex items-center cursor-pointer">
            <p>All Microsoft</p>
            <span class="material-symbols-outlined">
              expand_more
            </span>
          </div>
          <div className="search ml-3 cursor-pointer">
            <span class="material-symbols-outlined">
              search
            </span>
          </div>
          <div className="cart ml-3 cursor-pointer">
            <span class="material-symbols-outlined">
              shopping_cart
            </span>
          </div>
          <div className="profile ml-3 lg:mr-3 cursor-pointer">
            <span class="material-symbols-outlined">
              account_circle
            </span>
          </div>
        </div>
      </div>
      <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false}>
        <div className="main w-full   border-2 border-gray-200 border-solid flex flex-col sm:flex-row sm:h-96 ">
          <div className="imagecon w-full  sm:h-full sm:w-3/5 lg:w-2/5">
            <img src='https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cmZhY2UlMjBwcm8lMjA5JTIwbWljcm9zb2Z0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt="" className="w-full h-full" />
          </div>
          <div className="description px-7 py-5 flex flex-col sm:justify-center md:justify-start items-start sm:w-2/5 lg:w-3/5 xl:justify-center">
            <h2 className=' font-semibold text-2xl'>Surface Pro 5</h2>
            <p className=' py-2  lg:w-96 text-left'>Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps</p>
            <button className=' bg-blue-700 text-white rounded w-28 mt-1 h-11'>Learn More</button>
            <div className="people mt-2 flex place-items-center cursor-pointer ">
              <p className=' font-semibold text-lg  text-blue-600'>For up to six people</p>
              <span className="arrow material-symbols-outlined text-blue-400  flex items-center pt-1">
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div className="main w-full  border-2 border-gray-200 border-solid flex flex-col sm:flex-row sm:h-96 ">
          <div className="imagecon w-full sm:h-full sm:w-3/5 lg:w-2/5">
            <img src='https://images.unsplash.com/photo-1640763502425-7668dc1e4023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWljcm9zb2Z0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt="" className="w-full h-full" />
          </div>
          <div className="description px-7 py-5 flex flex-col sm:justify-center md:justify-start items-start sm:w-2/5 lg:w-3/5 xl:justify-center">
            <h2 className=' font-semibold text-2xl'>Microsoft 365</h2>
            <p className=' py-2  lg:w-96 text-left'>Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps</p>
            <button className=' bg-blue-700 text-white rounded w-28 mt-1 h-11'>Learn More</button>
            <div className="people mt-2 flex place-items-center cursor-pointer ">
              <p className=' font-semibold text-lg  text-blue-600'>For up to six people</p>
              <span className="arrow material-symbols-outlined text-blue-400  flex items-center pt-1">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="microsoftstore w-full  h-96 flex flex-col items-center  md:h-40 md:flex-row md:justify-center justify-evenly  sm:text-lg md:text-sm lg:text-lg xl:justify-center">
        <div className="item  flex flex-col items-center md:mr-8 ">
          <i class="fa-brands fa-microsoft text-4xl"></i>
          <a href="https://microsoft.com" className=' text-blue-700 font-semibold underline '>Choose your microsoft 365</a>
        </div>
        <div className="item  flex flex-col items-center md:mr-8 ">
          <i class="fa-solid fa-laptop text-4xl"></i>
          <a href="https://microsoft.com" className=' text-blue-700 font-semibold underline'>Explore surface devices</a>
        </div>
        <div className="item  flex flex-col items-center md:mr-8">
          <i class="fa-brands fa-xbox text-4xl"></i>
          <a href="https://microsoft.com" className=' text-blue-700 font-semibold underline'>Buy Xbox games and consoles</a>
        </div>
        <div className="item  flex flex-col items-center md:mr-8">
          <i class="fa-brands fa-microsoft text-4xl"></i>
          <a href="https://microsoft.com" className=' text-blue-700 font-semibold underline'>Get Windows 11</a>
        </div>
      </div>
      <div className="lapitems w-full  grid justify-items-center grid-cols-1 gap-y-1 sm:gap-x-3 sm:grid-cols-2 xl:grid-cols-4 xl:justify-items-center xl:gap-x-0">
        <div className="itemcon w-11/12   ">
          <div className="imageconlap">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=297&hei=167&fit=crop" alt="" className='w-full' />
          </div>
          <div className="lapdescription  flex flex-col py-5 px-2">
            <h2 className=' font-semibold text-2xl'>Surface Laptop 5</h2>
            <p className=' pt-2'>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
            <div className="people learnmore flex mt-2 cursor-pointer">
              <p className=' text-blue-700 font-semibold'>Learn More</p>
              <span class="arrow material-symbols-outlined text-blue-700">
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div className="itemcon w-11/12 ">
          <div className="imageconlap">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=297&hei=167&fit=crop" alt="" className='w-full' />
          </div>
          <div className="lapdescription flex flex-col py-5 px-2">
            <h2 className=' font-semibold text-2xl'>Surface Laptop Studio</h2>
            <p className=' pt-2'>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
            <div className="people learnmore flex mt-2 cursor-pointer">
              <p className=' text-blue-700 font-semibold'>Learn more</p>
              <span class="arrow material-symbols-outlined text-blue-700">
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div className="itemcon w-11/12 ">
          <div className="imageconlap">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=297&hei=167&fit=crop" alt="" className='w-full' />
          </div>
          <div className="lapdescription flex flex-col py-5 px-2">
            <h2 className=' font-semibold text-2xl'>Xbox Series X</h2>
            <p className=' pt-2'>The fastest, most powerful Xbox ever.</p>
            <div className="people learnmore flex mt-2 cursor-pointer">
              <p className=' text-blue-700 font-semibold'>Shop Xbox Series X</p>
              <span class="arrow material-symbols-outlined text-blue-700">
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div className="itemcon w-11/12 ">
          <div className="imageconlap">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=297&hei=167&fit=crop" alt="" className='w-full' />
          </div>
          <div className="lapdescription flex flex-col py-5 px-2">
            <h2 className=' font-semibold text-2xl'>Xbox Series S</h2>
            <p className=' pt-2'>Next-gen performance in the smallest Xbox ever.</p>
            <div className="people learnmore flex mt-2 cursor-pointer">
              <p className=' text-blue-700 font-semibold'>Shop Xbox Series X</p>
              <span class="arrow material-symbols-outlined text-blue-700">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bigimage w-full flex justify-center mt-7 lg:h-96  xl:h-[35rem]">
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Bing-AI-Open-Preview:VP4-1260x600" alt="" className=' w-11/12 rounded-sm lg:hidden' />
        <div className="largeimg w-11/12 hidden lg:block h-full lg:relative bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Bing-AI-Open-Preview:VP4-1260x600')] bg-cover">
          <div className="innertext  w-[30rem] border-solid absolute h-full  left-0 top-0  flex flex-col justify-center px-16">
            <h1 className=" font-semibold text-2xl text-justify">Announcing the next wave of AI innovation</h1>
            <p className=" mt-3">The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.</p>
            <button className=" bg-blue-700 text-white w-40 h-11 rounded mt-3">Learn more about it</button>
          </div>
        </div>
      </div>
      <div className="announcing w-full px-6 mt-8 sm:px-10 lg:hidden ">
        <h2 className=' font-semibold text-2xl '>Announcing the next wave of AI innovation</h2>
        <p className='pt-3'>Microsoft is committed to developing and deploying AI in a safe, secure, and transparent way that can help expand positive outcomes in India—and the world.</p>
        <button className=' bg-blue-700 text-white rounded w-40 h-10 mt-3'>Learn more about it</button>
      </div>
      <div className="business  flex justify-center w-full mt-20 pb-3 xl:pb-4 h-10">
        <h1 className=" font-semibold text-2xl  w-11/12 sm:w-[96%] md:w-[96%] xl:w-[98%] ">For business</h1>
      </div>
      <div className="lapitems w-full  grid justify-items-center grid-cols-1 gap-y-1 sm:gap-x-3 sm:grid-cols-2 xl:grid-cols-4 xl:justify-items-center xl:gap-x-0">
        <div className="itemcon w-11/12   ">
          <div className="imageconlap">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=297&hei=167&fit=crop" alt="" className='w-full' />
          </div>
          <div className="lapdescription  flex flex-col py-5 px-2">
            <h2 className=' font-semibold text-2xl'>Surface for Business</h2>
            <p className=' pt-2'>No matter what you do, there’s a Surface to help you do it.</p>
            <div className="people learnmore flex mt-2 cursor-pointer">
              <p className=' text-blue-700 font-semibold'>Shop now</p>
              <span class="arrow material-symbols-outlined text-blue-700">
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div className="itemcon w-11/12 ">
          <div className="imageconlap">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=297&hei=167&fit=crop" alt="" className='w-full' />
          </div>
          <div className="lapdescription flex flex-col py-5 px-2">
            <h2 className=' font-semibold text-2xl'>Get Microsoft Teams for free</h2>
            <p className=' pt-2'>Online meetings, chat and shared cloud storage – all in one place.</p>
            <div className="people learnmore flex mt-2 cursor-pointer">
              <p className=' text-blue-700 font-semibold'>Sign up for free</p>
              <span class="arrow material-symbols-outlined text-blue-700">
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div className="itemcon w-11/12 ">
          <div className="imageconlap">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-For-Business-Woman-Teams-Call?wid=297&hei=167&fit=crop" alt="" className='w-full' />
          </div>
          <div className="lapdescription flex flex-col py-5 px-2">
            <h2 className=' font-semibold text-2xl'>Try Microsoft 365 for free</h2>
            <p className=' pt-2'>Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial.</p>
            <div className="people learnmore flex mt-2 cursor-pointer">
              <p className=' text-blue-700 font-semibold'>Start your free trial</p>
              <span class="arrow material-symbols-outlined text-blue-700">
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div className="itemcon w-11/12 ">
          <div className="imageconlap">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=297&hei=167&fit=crop" alt="" className='w-full' />
          </div>
          <div className="lapdescription flex flex-col py-5 px-2">
            <h2 className=' font-semibold text-2xl'>Join the era of AI</h2>
            <p className=' pt-2'>Create, communicate, and code with the latest Microsoft AI solutions.</p>
            <div className="people learnmore flex mt-2 cursor-pointer">
              <p className=' text-blue-700 font-semibold'>Explore AI solutions</p>
              <span class="arrow material-symbols-outlined text-blue-700">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bigimage w-full flex justify-center mt-7 lg:h-96  xl:h-[35rem]">
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Microsoft-Responsible-AI:VP4-1260x600" alt="" className=' w-11/12 rounded lg:hidden' />
        <div className="largeimg w-11/12  justify-start items-center hidden lg:flex h-full  bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Microsoft-Responsible-AI:VP4-1260x600')] bg-cover">
          <div className="innertext h-80 w-[30rem] ml-10  bg-white text-black border-solid   flex flex-col justify-center place-items-center px-20">
            <h1 className=" font-semibold text-2xl ">Our blueprint for governing AI in India</h1>
            <p className=" mt-3">Microsoft is committed to developing and deploying AI in a safe, secure, and transparent way that can help expand positive outcomes in India—and the world.</p>
            <button className=' bg-blue-700 text-white  rounded w-80 text-center h-8  mt-3'>Learn about our approach to responsible AI</button>
          </div>
        </div>
      </div>
      <div className="announcing w-full px-4  mt-8 sm:px-10 lg:hidden ">
        <h2 className=' font-semibold text-2xl '>Our blueprint for governing AI in India</h2>
        <p className='pt-3'>Microsoft is committed to developing and deploying AI in a safe, secure, and transparent way that can help expand positive outcomes in India—and the world.</p>
        <button className=' bg-blue-700 text-white rounded w-64 sm:w-96 sm:h-10 sm:pl-0 sm:text-center h-16 text-left pl-4 mt-3'>Learn about our approach to responsible AI</button>
      </div>
      <div className="footer mt-12 w-full bg-gray-200 flex flex-col sm:flex-row sm:justify-evenly xl:h-72 xl:items-center">
        <div className="item my-5 ml-4  sm:ml-0">
           <h2 className=" font-semibold text-[#616161]">What's new</h2>
           <div className=" text-xs my-3">Microsoft 365</div>
           <div className=" text-xs my-3">Games</div>
           <div className=" text-xs my-3">Surface Pro 9</div>
           <div className=" text-xs my-3">Surface Laptop 5</div>
           <div className=" text-xs my-3">Surface Laptop Go 2</div>
           <div className=" text-xs my-3">Windows 11 apps</div>
        </div>
        <div className="item my-5 ml-4 sm:ml-0">
           <h2 className=" font-semibold text-[#616161]">Microsoft Store</h2>
           <div className=" text-xs my-3">Account Profile</div>
           <div className=" text-xs my-3">Download Center</div>
           <div className=" text-xs my-3">Microsoft Store Support</div>
           <div className=" text-xs my-3">Returns</div>
           <div className=" text-xs my-3">Order Tracking</div>
        </div>
        <div className="item my-5 ml-4 sm:ml-0">
           <h2 className=" font-semibold text-[#616161]">Business</h2>
           <div className=" text-xs my-3">Microsoft Cloud</div>
           <div className=" text-xs my-3">Micrsoft Security</div>
           <div className=" text-xs my-3">Azure</div>
           <div className=" text-xs my-3">Dynamic 365</div>
           <div className=" text-xs my-3">Microsoft Advertising</div>
           <div className=" text-xs my-3">Microsoft Teams</div>

        </div>
        <div className="item my-5 ml-4 sm:ml-0">
           <h2 className=" font-semibold text-[#616161]">Developer & IT</h2>
           <div className=" text-xs my-3">Developer Center</div>
           <div className=" text-xs my-3">Documentation</div>
           <div className=" text-xs my-3">Microsoft learn</div>
           <div className=" text-xs my-3">Dynamic 365</div>
           <div className=" text-xs my-3">App Source</div>
           <div className=" text-xs my-3">Visual Studio</div>

        </div>
      </div>
      
    </>
  )
}

export default App
