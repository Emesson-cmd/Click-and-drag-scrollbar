import './App.css'
import { data } from './mockData.js';
import { MdChevronLeft, MdChevronRight, MdOutlineMiscellaneousServices } from 'react-icons/md';

function App() {

  const slideLeft = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

  let isDown = false;
  let startX;
  let scrollleft;

  /**mousedown
  mouseleave
  mouseup
  mousemove*/

  function mouseDown(e) {
    isDown = true;
    e.target.parentNode.classList.add('active');
    startX = e.pageX - e.target.parentNode.offsetLeft;
    scrollleft = e.target.parentNode.scrollLeft
  }

  function mouseLeave(e) {
    isDown = false;
    e.target.parentNode.classList.remove('active')
  }

  function mouseUp(e) {
    isDown = false;
    e.target.parentNode.classList.remove('active')
  }

  function mouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.target.parentNode.offsetLeft;
    const walk = (x - startX) * 3
    e.target.parentNode.scrollLeft = scrollleft - walk;
    console.log(walk)
  }

  return (
    <>
      <img className="w-full h-[340px] object-cover" src='https://images.unsplash.com/photo-1657299143471-231353519c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />

      <div className='relative flex items-center'>

        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={() => slideLeft()} size={40} />

        <div id="slider"
          onMouseDown={(e) => mouseDown(e)}
          onMouseUp={(e) => mouseUp(e)}
          onMouseLeave={(e) => mouseLeave(e)}
          onMouseMove={(e) => mouseMove(e)}
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {
            data.map((item) => {
              return <img className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={item.img} />
            })
          }
        </div>

        <MdChevronRight onClick={() => slideRight()} className='opacity-50 cursor-pointer hover:opacity-100' size={40} />

      </div>
    </>
  );
}

export default App;
