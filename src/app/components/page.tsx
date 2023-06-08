import { AiFillApi} from 'react-icons/ai'
import {BsColumnsGap} from 'react-icons/bs'

export default function ComponentsPage() {
  return (
    <div className="flex flex-1 flex-row gap-3">
      <aside className="min-w-[300px] border-r-2 h-screen p-4">
        <div className='flex flex-row'>
          <BsColumnsGap className='text-2xl mr-3'/>
          <h2 className="font-bold text-xl">Components</h2>
        </div>
        <div>
          <ul className="pl-10">
            <li><a href="/components/button">Button</a></li>
            <li><a href="/components/button">Image</a></li>
            <li><a href="/components/button">Avatar</a></li>
            <li><a href="/components/button">Animation</a></li>
            <li><a href="/components/button">Row</a></li>
            <li><a href="/components/button">Column</a></li>
            <li><a href="/components/button">Audio Player</a></li>
            <li><a href="/components/button">Form field</a></li>
            <li><a href="/components/button">Form file picker</a></li>
            <li><a href="/components/button">Calendar</a></li>
            <li><a href="/components/button">Icons</a></li>
            <li><a href="/components/button">Column</a></li>
          </ul>
        </div>

        <div className='flex flex-row pt-4'>
          <AiFillApi className='text-3xl mr-3'/>
          <h2 className="font-bold text-xl">Services</h2>
        </div>
        <div>
          <ul className="pl-10">
            <li><a href="/components/button">File picker</a></li>
            <li><a href="/components/button">Image</a></li>
          
          </ul>
        </div>
      </aside>

      <main className="">
        <h1 className='text-4xl text-red-500'>Fast UI Kit</h1>
      </main>
    </div>
  )
}